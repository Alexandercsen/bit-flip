"use client";

import { useState } from "react";
import {
  lessonTypeOptions,
  levelOptions,
  site,
  subjectOptions,
} from "@/lib/content";
import { cn } from "@/lib/cn";
import { Button, Card, inputClassName, Prose, SectionHeading } from "./ui";

type FormState = "idle" | "submitting" | "success" | "error" | "rate_limited";

type ContactProps = {
  prefillSubject?: string;
};

export function Contact({ prefillSubject = "" }: ContactProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorDetail, setErrorDetail] = useState("");
  const [formOpenedAt] = useState(() => Date.now());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    level: "",
    subject: "",
    message: "",
    format: "",
    availability: "",
    bf_hp: "",
  });

  const subjectValue = formData.subject || prefillSubject;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitting");
    setErrorDetail("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: subjectValue,
          formOpenedAt,
        }),
      });

      const data = (await res.json().catch(() => null)) as {
        error?: string;
        success?: boolean;
      } | null;

      if (res.status === 429) {
        setFormState("rate_limited");
        return;
      }

      if (!res.ok || !data?.success) {
        setErrorDetail(data?.error || "Failed to send message");
        throw new Error("Failed to send");
      }

      setFormState("success");
      setFormData({
        name: "",
        email: "",
        level: "",
        subject: "",
        message: "",
        format: "",
        availability: "",
        bf_hp: "",
      });
    } catch {
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-jb-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading>
          Contact <span className="text-jb-link">BIT FLIP</span>
        </SectionHeading>
        <Prose className="mt-4 max-w-2xl">
          Tell us what you&apos;re learning and what&apos;s stuck. We usually
          reply the same day if you write before evening.
        </Prose>

        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-jb-muted">
              Email
            </dt>
            <dd className="mt-1">
              <a
                href={`mailto:${site.email}`}
                className="text-[15px] text-jb-link hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-link"
              >
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-jb-muted">
              Location
            </dt>
            <dd className="mt-1 text-[15px] text-jb-secondary">
              {site.location}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-jb-muted">
              Availability
            </dt>
            <dd className="mt-1 text-[15px] text-jb-secondary">
              {site.availability}
            </dd>
          </div>
        </dl>

        <Card className="mt-10">
          {formState === "success" ? (
            <div role="status" className="space-y-2">
              <p className="font-mono text-[13px] text-jb-green">
                Message sent successfully.
              </p>
              <Prose className="text-[15px]">
                Check your inbox (and spam). We&apos;ll reply when we see it.
              </Prose>
              <Button
                variant="secondary"
                className="mt-4"
                onClick={() => setFormState("idle")}
              >
                Send another message
              </Button>
            </div>
          ) : formState === "rate_limited" ? (
            <div role="alert" className="space-y-2">
              <p className="font-mono text-[13px] text-jb-yellow">
                Too many messages from this connection.
              </p>
              <Prose className="text-[15px]">
                Wait a bit and try again, or email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-jb-link hover:underline"
                >
                  {site.email}
                </a>{" "}
                directly.
              </Prose>
              <Button
                variant="secondary"
                className="mt-4"
                onClick={() => setFormState("idle")}
              >
                Back to form
              </Button>
            </div>
          ) : formState === "error" ? (
            <div role="alert" className="space-y-2">
              <p className="font-mono text-[13px] text-jb-red">
                Something went wrong.
              </p>
              <Prose className="text-[15px]">
                {errorDetail ? `${errorDetail}. ` : null}
                You can also email us at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-jb-link hover:underline"
                >
                  {site.email}
                </a>
                .
              </Prose>
              <Button
                variant="secondary"
                className="mt-4"
                onClick={() => setFormState("idle")}
              >
                Try again
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative space-y-4">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
              >
                <label htmlFor="bf_hp">Leave blank</label>
                <input
                  id="bf_hp"
                  name="bf_hp"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.bf_hp}
                  onChange={(e) =>
                    setFormData({ ...formData, bf_hp: e.target.value })
                  }
                />
              </div>
              <FormField label="Name" htmlFor="name" required>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={80}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputClassName}
                />
              </FormField>
              <FormField label="Email" htmlFor="email" required>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={120}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputClassName}
                />
              </FormField>
              <FormField label="Student level / year" htmlFor="level" required>
                <select
                  id="level"
                  required
                  value={formData.level}
                  onChange={(e) =>
                    setFormData({ ...formData, level: e.target.value })
                  }
                  className={inputClassName}
                >
                  <option value="">Select level</option>
                  {levelOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </FormField>
              <FormField label="Subject" htmlFor="subject" required>
                <select
                  id="subject"
                  required
                  value={subjectValue}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className={inputClassName}
                >
                  <option value="">Select subject</option>
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </FormField>
              <FormField label="Message" htmlFor="message" required>
                <textarea
                  id="message"
                  required
                  rows={4}
                  maxLength={4000}
                  minLength={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={cn(inputClassName, "resize-y")}
                />
              </FormField>
              <FormField label="Lesson type" htmlFor="format" required>
                <select
                  id="format"
                  required
                  value={formData.format}
                  onChange={(e) =>
                    setFormData({ ...formData, format: e.target.value })
                  }
                  className={inputClassName}
                >
                  <option value="">Select type</option>
                  {lessonTypeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </FormField>
              <FormField
                label="Preferred availability"
                htmlFor="availability"
              >
                <input
                  id="availability"
                  type="text"
                  placeholder="e.g. weekday evenings"
                  maxLength={200}
                  value={formData.availability}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      availability: e.target.value,
                    })
                  }
                  className={inputClassName}
                />
              </FormField>
              <Button
                type="submit"
                disabled={formState === "submitting"}
                className="mt-2"
              >
                {formState === "submitting" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}

function FormField({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block font-mono text-[12px] text-jb-secondary"
      >
        {label}
        {required && <span className="text-jb-red"> *</span>}
      </label>
      {children}
    </div>
  );
}
