"use client";

import { useState } from "react";
import {
  leavingCertSupport,
  lessonActivities,
  parentExpectations,
  parentFaqItems,
  pricingPlans,
  site,
} from "@/lib/content";
import { cn } from "@/lib/cn";
import { Button, Divider } from "./ui";
import {
  DocumentHeading,
  EditorSurface,
  Prose,
} from "./Document";

type ForParentsProps = {
  onContact: () => void;
};

export function ForParents({ onContact }: ForParentsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="for-parents" className="scroll-mt-4">
      <EditorSurface>
        <DocumentHeading level={1}>
          <span className="text-jb-purple"># </span>
          For parents
        </DocumentHeading>

        <Prose className="mt-6 max-w-2xl space-y-4">
          <p>
            You don&apos;t need to understand the code to choose a tutor. You do
            need someone who can explain it without talking down to your child.
          </p>
          <p>
            BIT FLIP is one-to-one online tutoring in Python, Java, C++, and
            Leaving Certificate Computer Science. Lessons follow what they&apos;re
            stuck on in school or college, not a canned syllabus.
          </p>
          <p className="text-jb-text">
            First lesson free. If the fit is wrong, that&apos;s useful information.
          </p>
        </Prose>

        <Divider className="my-8" />

        <DocumentHeading level={2}>
          <span className="text-jb-purple">## </span>
          What happens in a lesson
        </DocumentHeading>
        <Prose className="mt-4 max-w-2xl space-y-4">
          <p>
            Screen share, editor open, actual problems. A typical hour might
            include any of these:
          </p>
        </Prose>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {lessonActivities.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 font-sans text-[14px] text-jb-secondary"
            >
              <span
                className="size-1.5 shrink-0 rounded-full bg-jb-blue"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 font-sans text-[14px] text-jb-muted">
          We won&apos;t fill the hour with note-taking for the sake of looking
          busy.
        </p>

        <div
          className="mt-6 overflow-x-auto rounded-[6px] border border-jb-border bg-jb-tool p-4 font-mono text-[12px]"
          aria-hidden="true"
        >
          <p className="text-jb-yellow">lesson/</p>
          {[
            "understand_problem",
            "break_it_down",
            "write_solution",
            "debug",
            "review",
          ].map((step, i) => (
            <p key={step} className="text-jb-secondary">
              {i === 4 ? "└── " : "├── "}
              <span className="text-jb-green">{step}</span>
            </p>
          ))}
        </div>

        <Divider className="my-8" />

        <DocumentHeading level={2}>
          <span className="text-jb-purple">## </span>
          We won&apos;t do the homework for them
        </DocumentHeading>
        <Prose className="mt-4 max-w-2xl space-y-4">
          <p>
            Giving the finished answer is fast and feels helpful. It also means
            they&apos;re stuck again on the next question.
          </p>
          <p>
            When they&apos;re stuck, we shrink the problem, ask what they think
            happens next, and write code with them. The goal is the next
            exercise, not just this one.
          </p>
          <p>
            That includes coursework and projects: guidance yes, submitting our
            work as theirs no.
          </p>
        </Prose>

        <Divider className="my-8" />

        <DocumentHeading level={2}>
          <span className="text-jb-purple">## </span>
          Different starting points
        </DocumentHeading>
        <Prose className="mt-4 max-w-2xl space-y-4">
          <p>
            Some students have never written a program. Others can write a loop
            but fall apart once the problem gets longer. Some only need exam
            practice. Tell us which it is; we don&apos;t force a one-size plan.
          </p>
        </Prose>

        <Divider className="my-8" />

        <DocumentHeading level={2}>
          <span className="text-jb-purple">## </span>
          Leaving Certificate
        </DocumentHeading>
        <Prose className="mt-4 max-w-2xl space-y-4">
          <p>
            For LC Computer Science we can work on topics, papers, technique, and
            project guidance. Examples:
          </p>
        </Prose>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {leavingCertSupport.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 font-sans text-[14px] text-jb-secondary"
            >
              <span
                className="size-1.5 shrink-0 rounded-full bg-jb-yellow"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 font-sans text-[14px] text-jb-muted">
          We sit beside school, not instead of it.
        </p>

        <Divider className="my-8" />

        <DocumentHeading level={2}>
          <span className="text-jb-purple">## </span>
          Updates for you
        </DocumentHeading>
        <Prose className="mt-4 max-w-2xl space-y-4">
          <p>
            Email us whenever you want a straight update. If you prefer a short
            note after each lesson, say so when you book and we&apos;ll do that.
          </p>
        </Prose>

        <Divider className="my-8" />

        <DocumentHeading level={2}>
          <span className="text-jb-purple">## </span>
          Online only (for now)
        </DocumentHeading>
        <Prose className="mt-4 max-w-2xl space-y-4">
          <p>
            They need a computer and a decent connection. Sharing the screen
            works well for programming: we can see the same file and the same
            error.
          </p>
        </Prose>

        <Divider className="my-8" />

        <DocumentHeading level={2}>
          <span className="text-jb-purple">## </span>
          Pricing
        </DocumentHeading>
        <Prose className="mt-4 max-w-2xl">
          <p>First lesson free, then:</p>
        </Prose>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-[6px] border border-jb-border bg-jb-tool px-4 py-3"
            >
              <p className="font-mono text-[12px] text-jb-muted">{plan.name}</p>
              <p className="mt-1 font-mono text-[18px] text-jb-text">
                {plan.rate}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 font-sans text-[13px] text-jb-muted">
          {site.cancellationPolicy}
        </p>

        <Divider className="my-8" />

        <DocumentHeading level={2}>
          <span className="text-jb-purple">## </span>
          What you can expect from us
        </DocumentHeading>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {parentExpectations.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 font-sans text-[14px] text-jb-secondary"
            >
              <span className="text-jb-green" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <Divider className="my-8" />

        <DocumentHeading level={2}>
          <span className="text-jb-purple">## </span>
          Questions parents ask
        </DocumentHeading>
        <div className="mt-6 divide-y divide-jb-border border border-jb-border">
          {parentFaqItems.map((item, index) => (
            <div key={item.question}>
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className={cn(
                  "flex w-full items-start justify-between gap-4 px-4 py-3 text-left transition-colors duration-150",
                  "hover:bg-jb-blue/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-jb-blue",
                  openIndex === index ? "bg-jb-blue/10" : ""
                )}
                aria-expanded={openIndex === index}
              >
                <span className="font-mono text-[13px] text-jb-text">
                  <span className="text-jb-yellow">Q. </span>
                  {item.question}
                </span>
                <span
                  className="shrink-0 font-mono text-[13px] text-jb-blue"
                  aria-hidden="true"
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="border-t border-jb-border bg-jb-green/5 px-4 py-3">
                  <Prose className="text-[14px]">
                    <span className="font-mono text-jb-green">A. </span>
                    {item.answer}
                  </Prose>
                </div>
              )}
            </div>
          ))}
        </div>

        <Divider className="my-8" />

        <div className="mt-2 rounded-[6px] border border-jb-cyan/35 bg-jb-cyan/10 px-5 py-5">
          <p className="font-mono text-[15px] text-jb-text">
            Want to talk before booking?
          </p>
          <p className="mt-1 font-sans text-[14px] text-jb-secondary">
            Email is fine. We&apos;ll answer without the brochure language.
          </p>
          <Button className="mt-4" onClick={onContact}>
            Contact BIT FLIP
          </Button>
          <p className="mt-3 font-mono text-[12px] text-jb-muted">
            {site.email}
          </p>
        </div>
      </EditorSurface>
    </section>
  );
}
