"use client";

import { pricingPlans, site } from "@/lib/content";
import { Button } from "./ui";
import {
  DocumentHeading,
  EditorSurface,
  Prose,
} from "./Document";

const accentStyles = {
  blue: {
    border: "border-jb-blue/40",
    bg: "bg-jb-blue/10",
    title: "text-jb-blue",
    rule: "text-jb-blue/60",
    bullet: "bg-jb-blue",
  },
  green: {
    border: "border-jb-green/40",
    bg: "bg-jb-green/10",
    title: "text-jb-green",
    rule: "text-jb-green/60",
    bullet: "bg-jb-green",
  },
  yellow: {
    border: "border-jb-yellow/40",
    bg: "bg-jb-yellow/10",
    title: "text-jb-yellow",
    rule: "text-jb-yellow/60",
    bullet: "bg-jb-yellow",
  },
  purple: {
    border: "border-jb-purple/40",
    bg: "bg-jb-purple/10",
    title: "text-jb-purple",
    rule: "text-jb-purple/60",
    bullet: "bg-jb-purple",
  },
} as const;

type PricingProps = {
  onBookSession: () => void;
};

export function Pricing({ onBookSession }: PricingProps) {
  return (
    <section id="pricing" className="scroll-mt-4">
      <EditorSurface>
        <DocumentHeading level={1}>
          <span className="text-jb-purple"># </span>
          Pricing
        </DocumentHeading>
        <Prose className="mt-4 max-w-2xl space-y-3">
          <p>
            Two rates. First lesson free so you can decide if the tutor and the
            format work for you.
          </p>
          <p>
            We&apos;re not the cheapest tutoring in Ireland, and we&apos;re not
            trying to be. You pay for an hour of focused attention on your code.
          </p>
        </Prose>

        {site.firstLessonFree && (
          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-[6px] border border-jb-green/40 bg-jb-green/10 px-4 py-3">
            <span className="font-mono text-[13px] text-jb-green">
              {site.firstLessonOffer}
            </span>
            <span className="font-sans text-[14px] text-jb-secondary">
              No card details before that first session.
            </span>
          </div>
        )}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {pricingPlans.map((plan) => {
            const style = accentStyles[plan.accent];
            return (
              <article
                key={plan.id}
                className={`rounded-[6px] border p-5 ${style.border} ${style.bg}`}
              >
                <h3 className={`font-mono text-[15px] ${style.title}`}>
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 font-mono text-[12px] ${style.rule}`}
                  aria-hidden="true"
                >
                  {"─".repeat(Math.min(plan.name.length + 2, 18))}
                </p>
                <p className="mt-4 font-mono text-[22px] text-jb-text">
                  {plan.rate}
                </p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 font-sans text-[14px] text-jb-secondary"
                    >
                      <span
                        className={`size-1.5 shrink-0 rounded-full ${style.bullet}`}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="mt-6 font-mono text-[12px] text-jb-muted">
          Sessions are usually 60 minutes. Rates apply after the free first
          lesson. {site.cancellationPolicy}
        </p>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-jb-border pt-6">
          <Button onClick={onBookSession}>Book Free First Lesson</Button>
        </div>
      </EditorSurface>
    </section>
  );
}
