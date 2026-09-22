"use client";

import { useState } from "react";
import { faqItems } from "@/lib/content";
import { cn } from "@/lib/cn";
import { DocumentHeading, EditorSurface, Prose } from "./Document";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-4">
      <EditorSurface>
        <DocumentHeading level={1}>
          <span className="text-jb-green">faq.md</span>
        </DocumentHeading>
        <Prose className="mt-4 mb-8">
          Short answers. If yours isn&apos;t here, email us.
        </Prose>

        <div className="divide-y divide-jb-border border border-jb-border">
          {faqItems.map((item, index) => (
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
      </EditorSurface>
    </section>
  );
}
