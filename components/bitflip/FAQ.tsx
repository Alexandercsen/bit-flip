"use client";

import { useState } from "react";
import { faqItems } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Prose, SectionHeading } from "./ui";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-jb-border bg-jb-main"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading>FAQ</SectionHeading>
        <Prose className="mt-4 mb-10">
          Short answers. If yours isn&apos;t here, email us.
        </Prose>

        <div className="divide-y divide-jb-border overflow-hidden rounded-xl border border-jb-border">
          {faqItems.map((item, index) => (
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
                <span className="text-[15px] text-jb-text">{item.question}</span>
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
    </section>
  );
}
