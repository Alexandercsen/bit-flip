"use client";

import { useState } from "react";
import { levelOptions, site, subjectOptions } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Button, inputClassName } from "./ui";
import { DocumentHeading, EditorSurface, Prose } from "./Document";
import { SiteFooter } from "./SiteFooter";

type FormState = "idle" | "submitting" | "success" | "error";

type ContactProps = {
  prefillSubject?: string;
};

export function Contact({ prefillSubject = "" }: ContactProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    level: "",
    subject: "",
    message: "",
    format: "",
    availability: "",
  });

  const subjectValue = formData.subject || prefillSubject;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, subject: subjectValue }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setFormState("success");
      setFormData({
        name: "",
        email: "",
        level: "",
        subject: "",
        message: "",
        format: "",
        availability: "",
      });
    } catch {
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-4">
      <EditorSurface>
        <DocumentHeading level={1}>
          <span className="text-jb-purple"># </span>
          Contact <span className="text-jb-cyan">BIT</span>{" "}
          <span className="text-jb-blue">FLIP</span>
        </DocumentHeading>
        <Prose className="mt-4 max-w-2xl">
          Tell us what you&apos;re learning and what&apos;s stuck. We usually
          reply the same day if you write before evening.
        </Prose>

        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[11px] text-jb-muted">Email</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${site.email}`}
                className="font-sans text-[14px] text-jb-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-blue"
              >
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] text-jb-muted">Location</dt>
            <dd className="mt-1 font-sans text-[14px] text-jb-secondary">
              {site.location}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] text-jb-muted">Availability</dt>
            <dd className="mt-1 font-sans text-[14px] text-jb-secondary">
              {site.availability}
            </dd>
          </div>
        </dl>

        <div className="mt-8 border border-jb-border bg-jb-tool p-6">
          {formState === "success" ? (
            <div role="status" className="space-y-2">
              <p className="font-mono text-[13px] text-jb-green">
                Message sent successfully.
              </p>
              <Prose className="text-[14px]">
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
          ) : formState === "error" ? (
            <div role="alert" className="space-y-2">
              <p className="font-mono text-[13px] text-jb-red">
                Something went wrong.
              </p>
              <Prose className="text-[14px]">
                Please try again or email us directly at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-jb-blue hover:underline"
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <FormField label="Name" htmlFor="name" required>
                <input
                  id="name"
                  type="text"
                  required
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
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={cn(inputClassName, "resize-y")}
                />
              </FormField>
              <FormField label="Preferred lesson format" htmlFor="format">
                <input
                  id="format"
                  type="text"
                  placeholder="e.g. online"
                  value={formData.format}
                  onChange={(e) =>
                    setFormData({ ...formData, format: e.target.value })
                  }
                  className={inputClassName}
                />
              </FormField>
              <FormField
                label="Preferred availability"
                htmlFor="availability"
              >
                <input
                  id="availability"
                  type="text"
                  placeholder="e.g. weekday evenings"
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
        </div>

        <SiteFooter />
      </EditorSurface>
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
