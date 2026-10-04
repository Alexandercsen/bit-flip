import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  lessonTypeOptions,
  levelOptions,
  site,
  subjectOptions,
} from "@/lib/content";
import { pruneRateLimits, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_IP = 8;
const MAX_GLOBAL = 60;
const MIN_SUBMIT_MS = 1200;

const LIMITS = {
  name: 80,
  email: 120,
  level: 80,
  subject: 80,
  message: 4000,
  format: 120,
  availability: 200,
} as const;

type ContactBody = {
  name?: string;
  email?: string;
  level?: string;
  subject?: string;
  message?: string;
  format?: string;
  availability?: string;
  /** Honeypot — must stay empty. */
  bf_hp?: string;
  /** Client form-open timestamp (ms). */
  formOpenedAt?: number | string;
};

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return (
    request.headers.get("x-real-ip")?.trim() ||
    request.headers.get("cf-connecting-ip")?.trim() ||
    "unknown"
  );
}

function oneLine(value: string, max: number): string {
  return value.replace(/[\r\n\u0000]+/g, " ").trim().slice(0, max);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !/[\r\n]/.test(email);
}

function buildEmailText(body: {
  name: string;
  email: string;
  level: string;
  subject: string;
  message: string;
  format?: string;
  availability?: string;
}) {
  return [
    `New BIT FLIP STUDIO enquiry`,
    ``,
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    `Level: ${body.level}`,
    `Subject: ${body.subject}`,
    `Lesson type: ${body.format || "n/a"}`,
    `Availability: ${body.availability || "n/a"}`,
    ``,
    `Message:`,
    body.message,
  ].join("\n");
}

function gmailConfigured(): { user: string; pass: string } | null {
  const user = (process.env.CONTACT_EMAIL ?? site.email).trim();
  const pass = (process.env.CONTACT_EMAIL_APP_PASSWORD ?? "").replace(
    /\s+/g,
    ""
  );
  if (!user || !pass) return null;
  return { user, pass };
}

async function sendWithGmail(body: {
  name: string;
  email: string;
  level: string;
  subject: string;
  message: string;
  format?: string;
  availability?: string;
}) {
  const auth = gmailConfigured();
  if (!auth) return false;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: auth.user, pass: auth.pass },
  });

  const info = await transporter.sendMail({
    from: `"BIT FLIP STUDIO" <${auth.user}>`,
    to: auth.user,
    replyTo: body.email,
    subject: oneLine(
      `BIT FLIP STUDIO enquiry: ${body.subject} (${body.name})`,
      200
    ),
    text: buildEmailText(body),
  });

  console.info("[BIT FLIP contact] gmail sent", {
    messageId: info.messageId,
    response: info.response,
    to: auth.user,
  });

  return true;
}

async function sendWithFormSubmit(body: {
  name: string;
  email: string;
  level: string;
  subject: string;
  message: string;
  format?: string;
  availability?: string;
}) {
  const to = (process.env.CONTACT_EMAIL ?? site.email).trim();
  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(to)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        level: body.level,
        subject: body.subject,
        message: body.message,
        lesson_type: body.format || "",
        availability: body.availability || "",
        _subject: `BIT FLIP STUDIO enquiry: ${body.subject} (${body.name})`,
        _template: "table",
        _replyto: body.email,
        // Ajax submissions can't complete an interactive captcha.
        _captcha: "false",
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`FormSubmit failed: ${res.status} ${text}`);
  }

  console.info("[BIT FLIP contact] formsubmit sent", { to });
  return true;
}

export async function POST(request: Request) {
  try {
    pruneRateLimits();

    const ip = clientIp(request);
    const ipLimit = rateLimit(`contact:ip:${ip}`, MAX_PER_IP, WINDOW_MS);
    if (!ipLimit.allowed) {
      return NextResponse.json(
        { error: "Too many messages. Try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(ipLimit.retryAfterSec) },
        }
      );
    }

    const globalLimit = rateLimit("contact:global", MAX_GLOBAL, WINDOW_MS);
    if (!globalLimit.allowed) {
      return NextResponse.json(
        { error: "Too many messages. Try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(globalLimit.retryAfterSec) },
        }
      );
    }

    let body: ContactBody;
    try {
      body = (await request.json()) as ContactBody;
    } catch {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Honeypot: ignore bot spam quietly. Field name avoids browser autofill
    // of "website" / URL fields that previously faked a successful send.
    if (body.bf_hp && String(body.bf_hp).trim() !== "") {
      console.warn("[BIT FLIP contact] honeypot tripped", { ip });
      return NextResponse.json({ success: true });
    }

    const openedAt = Number(body.formOpenedAt);
    if (
      Number.isFinite(openedAt) &&
      openedAt > 0 &&
      Date.now() - openedAt < MIN_SUBMIT_MS
    ) {
      return NextResponse.json(
        { error: "Please wait a moment and try again." },
        { status: 400 }
      );
    }

    const name = oneLine(String(body.name ?? ""), LIMITS.name);
    const email = oneLine(String(body.email ?? ""), LIMITS.email).toLowerCase();
    const level = oneLine(String(body.level ?? ""), LIMITS.level);
    const subject = oneLine(String(body.subject ?? ""), LIMITS.subject);
    const message = String(body.message ?? "")
      .replace(/\u0000/g, "")
      .trim()
      .slice(0, LIMITS.message);
    const format = oneLine(String(body.format ?? ""), LIMITS.format);
    const availability = body.availability
      ? oneLine(String(body.availability), LIMITS.availability)
      : undefined;

    if (!name || !email || !level || !subject || !message || !format) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (
      !(subjectOptions as readonly string[]).includes(subject) ||
      !(levelOptions as readonly string[]).includes(level) ||
      !(lessonTypeOptions as readonly string[]).includes(format)
    ) {
      return NextResponse.json({ error: "Invalid selection" }, { status: 400 });
    }

    if (message.length < 5) {
      return NextResponse.json(
        { error: "Message is too short" },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      level,
      subject,
      message,
      format,
      availability,
    };

    let sent = false;
    try {
      sent = await sendWithGmail(payload);
    } catch (gmailError) {
      console.error("[BIT FLIP contact] gmail failed, trying fallback", gmailError);
    }

    if (!sent) {
      await sendWithFormSubmit(payload);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[BIT FLIP contact]", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
