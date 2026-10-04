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
import { Button, Card, Divider, Prose, SectionHeading } from "./ui";

type ForParentsProps = {
  onContact: () => void;
};

export function ForParents({ onContact }: ForParentsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="for-parents" className="scroll-mt-20 border-t border-jb-border">
      <div className="mx-auto max-w-6xl space-y-14 px-4 py-20 sm:px-6 lg:px-8">
        <div>
          <SectionHeading>For parents</SectionHeading>
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
        </div>

        <div>
          <h3 className="text-xl font-semibold text-jb-text">
            What happens in a lesson
          </h3>
          <Prose className="mt-4 max-w-2xl">
            <p>
              Screen share, editor open, actual problems. A typical hour might
              include any of these:
            </p>
          </Prose>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {lessonActivities.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[15px] text-jb-secondary"
              >
                <span
                  className="size-1.5 shrink-0 rounded-full bg-jb-blue"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[14px] text-jb-muted">
            We won&apos;t fill the hour with note-taking for the sake of looking
            busy.
          </p>
          <div
            className="mt-6 overflow-x-auto rounded-xl border border-jb-border bg-jb-surface p-4 font-mono text-[12px]"
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
        </div>

        <div>
          <h3 className="text-xl font-semibold text-jb-text">
            We won&apos;t do the homework for them
          </h3>
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
        </div>

        <div>
          <h3 className="text-xl font-semibold text-jb-text">
            Different starting points
          </h3>
          <Prose className="mt-4 max-w-2xl">
            <p>
              Some students have never written a program. Others can write a loop
              but fall apart once the problem gets longer. Some only need exam
              practice. Tell us which it is; we don&apos;t force a one-size plan.
            </p>
          </Prose>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-jb-text">
            Leaving Certificate
          </h3>
          <Prose className="mt-4 max-w-2xl">
            <p>
              For LC Computer Science we can work on topics, papers, technique, and
              project guidance. Examples:
            </p>
          </Prose>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {leavingCertSupport.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[15px] text-jb-secondary"
              >
                <span
                  className="size-1.5 shrink-0 rounded-full bg-jb-yellow"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[14px] text-jb-muted">
            We sit beside school, not instead of it.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-jb-text">Updates for you</h3>
          <Prose className="mt-4 max-w-2xl">
            <p>
              Email us whenever you want a straight update. If you prefer a short
              note after each lesson, say so when you book and we&apos;ll do that.
            </p>
          </Prose>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-jb-text">
            Online only (for now)
          </h3>
          <Prose className="mt-4 max-w-2xl">
            <p>
              They need a computer and a decent connection. Sharing the screen
              works well for programming: we can see the same file and the same
              error.
            </p>
          </Prose>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-jb-text">Pricing</h3>
          <Prose className="mt-4 max-w-2xl">
            <p>First lesson free, then:</p>
          </Prose>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {pricingPlans.map((plan) => (
              <Card key={plan.id} className="px-4 py-3">
                <p className="font-mono text-[12px] text-jb-muted">{plan.name}</p>
                <p className="mt-1 text-[20px] font-semibold text-jb-text">
                  {plan.rate}
                </p>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-jb-muted">
            {site.cancellationPolicy}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-jb-text">
            What you can expect from us
          </h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {parentExpectations.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[15px] text-jb-secondary"
              >
                <span className="text-jb-green" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-jb-text">
            Questions parents ask
          </h3>
          <div className="mt-6 divide-y divide-jb-border overflow-hidden rounded-xl border border-jb-border">
            {parentFaqItems.map((item, index) => (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className={cn(
                    "flex w-full items-start justify-between gap-4 px-4 py-3.5 text-left transition-colors duration-150",
                    "hover:bg-jb-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-jb-link",
                    openIndex === index ? "bg-jb-elevated" : "bg-jb-surface"
                  )}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[15px] text-jb-text">
                    {item.question}
                  </span>
                  <span
                    className="shrink-0 font-mono text-[14px] text-jb-link"
                    aria-hidden="true"
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="border-t border-jb-border bg-jb-main px-4 py-3">
                    <Prose className="text-[15px]">{item.answer}</Prose>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <Card className="border-jb-cyan/35 bg-jb-cyan/10">
          <p className="text-[17px] font-semibold text-jb-text">
            Want to talk before booking?
          </p>
          <p className="mt-1 text-[15px] text-jb-secondary">
            Email is fine. We&apos;ll answer without the brochure language.
          </p>
          <Button className="mt-4" onClick={onContact}>
            Contact BIT FLIP
          </Button>
          <p className="mt-3 font-mono text-[12px] text-jb-muted">
            {site.email}
          </p>
        </Card>
      </div>
    </section>
  );
}
