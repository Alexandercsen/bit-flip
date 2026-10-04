"use client";

import { pricingPlans, site } from "@/lib/content";
import { Button, Card, Prose, SectionHeading } from "./ui";

const accentStyles = {
  blue: {
    border: "border-jb-blue/40",
    title: "text-jb-blue",
    bullet: "bg-jb-blue",
  },
  green: {
    border: "border-jb-green/40",
    title: "text-jb-green",
    bullet: "bg-jb-green",
  },
  yellow: {
    border: "border-jb-yellow/40",
    title: "text-jb-yellow",
    bullet: "bg-jb-yellow",
  },
  purple: {
    border: "border-jb-purple/40",
    title: "text-jb-purple",
    bullet: "bg-jb-purple",
  },
} as const;

type PricingProps = {
  onBookSession: () => void;
};

export function Pricing({ onBookSession }: PricingProps) {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-jb-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading>Pricing</SectionHeading>
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
          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-jb-green/40 bg-jb-green/10 px-4 py-3">
            <span className="font-mono text-[13px] text-jb-green">
              {site.firstLessonOffer}
            </span>
            <span className="text-[14px] text-jb-secondary">
              No card details before that first session.
            </span>
          </div>
        )}

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {pricingPlans.map((plan) => {
            const style = accentStyles[plan.accent];
            return (
              <Card key={plan.id} className={style.border}>
                <h3 className={`text-[14px] font-semibold tracking-wide ${style.title}`}>
                  {plan.name}
                </h3>
                <p className="mt-4 text-[28px] font-semibold text-jb-text">
                  {plan.rate}
                </p>
                <ul className="mt-5 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-[15px] text-jb-secondary"
                    >
                      <span
                        className={`size-1.5 shrink-0 rounded-full ${style.bullet}`}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <p className="mt-6 text-[13px] text-jb-muted">
          Sessions are usually 60 minutes. Rates apply after the free first
          lesson. {site.cancellationPolicy}
        </p>

        <div className="mt-8">
          <Button onClick={onBookSession}>Book Free First Lesson</Button>
        </div>
      </div>
    </section>
  );
}
