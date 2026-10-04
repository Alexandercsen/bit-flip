"use client";

import { subjects } from "@/lib/content";
import { subjectAccent } from "@/lib/colors";
import { Button, Card, Prose, SectionHeading } from "./ui";

type SubjectsProps = {
  onBookSession: () => void;
  onAskAbout: (subject: string) => void;
};

export function Subjects({ onBookSession, onAskAbout }: SubjectsProps) {
  return (
    <section id="subjects" className="scroll-mt-20 border-t border-jb-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Subjects">What we teach</SectionHeading>
        <Prose className="mt-4 max-w-2xl">
          <p>
            Four things we actually teach. Pick the one that matches your
            homework or exam. If you&apos;re unsure, say so in the contact form
            and we&apos;ll tell you where to start.
          </p>
        </Prose>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {subjects.map((subject) => {
            const accent = subjectAccent[subject.id];
            return (
              <article
                key={subject.id}
                id={`subject-${subject.id}`}
                className="scroll-mt-24"
              >
                <Card className={`${accent.border} border-l-[3px]`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className={`text-[22px] font-semibold ${accent.text}`}>
                      {subject.name}
                    </h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] ${accent.bg} ${accent.text}`}
                    >
                      {subject.level}
                    </span>
                  </div>
                  <Prose className="mt-3">{subject.description}</Prose>
                  <ul className="mt-5 space-y-1.5">
                    {subject.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-2 text-[14px] text-jb-secondary"
                      >
                        <span
                          className={`size-1.5 shrink-0 rounded-full ${accent.dot}`}
                          aria-hidden="true"
                        />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-jb-border pt-5">
                    <Button
                      variant="secondary"
                      onClick={() => onAskAbout(subject.name)}
                    >
                      Ask About {subject.name} →
                    </Button>
                  </div>
                </Card>
              </article>
            );
          })}
        </div>

        <div className="mt-10">
          <Button onClick={onBookSession}>Book a Session</Button>
        </div>
      </div>
    </section>
  );
}
