import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/content";

type ContactBody = {
  name?: string;
  email?: string;
  level?: string;
  subject?: string;
  message?: string;
  format?: string;
  availability?: string;
};

function buildEmailText(body: Required<
  Pick<ContactBody, "name" | "email" | "level" | "subject" | "message">
> &
  Pick<ContactBody, "format" | "availability">) {
  return [
    `New BIT FLIP enquiry`,
    ``,
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    `Level: ${body.level}`,
    `Subject: ${body.subject}`,
    `Preferred format: ${body.format || "n/a"}`,
    `Availability: ${body.availability || "n/a"}`,
    ``,
    `Message:`,
    body.message,
  ].join("\n");
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
  const user = process.env.CONTACT_EMAIL ?? site.email;
  const pass = process.env.CONTACT_EMAIL_APP_PASSWORD;

  if (!pass) return false;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"BIT FLIP website" <${user}>`,
    to: user,
    replyTo: body.email,
    subject: `BIT FLIP enquiry: ${body.subject} (${body.name})`,
    text: buildEmailText(body),
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
  const to = process.env.CONTACT_EMAIL ?? site.email;
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
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
      format: body.format || "",
      availability: body.availability || "",
      _subject: `BIT FLIP enquiry: ${body.subject} (${body.name})`,
      _template: "table",
      _captcha: "false",
      _replyto: body.email,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`FormSubmit failed: ${res.status} ${text}`);
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const { name, email, level, subject, message } = body;

    if (!name || !email || !level || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const payload = {
      name: String(name).trim(),
      email: String(email).trim(),
      level: String(level).trim(),
      subject: String(subject).trim(),
      message: String(message).trim(),
      format: body.format ? String(body.format).trim() : undefined,
      availability: body.availability
        ? String(body.availability).trim()
        : undefined,
    };

    const sentWithGmail = await sendWithGmail(payload);
    if (!sentWithGmail) {
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
