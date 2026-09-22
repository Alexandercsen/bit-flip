"use client";

import { subjects } from "@/lib/content";
import { subjectAccent } from "@/lib/colors";
import { Button, Divider } from "./ui";
import {
  DocumentHeading,
  DocumentLine,
  EditorSurface,
  Prose,
} from "./Document";

type HeroProps = {
  onBookSession: () => void;
  onMeetTutors: () => void;
};

export function Hero({ onBookSession, onMeetTutors }: HeroProps) {
  return (
    <section id="home" className="scroll-mt-4">
      <EditorSurface className="border-jb-blue/30">
        <DocumentHeading level={1} line={1}>
          <span className="text-jb-purple"># </span>
          <span className="text-jb-blue">BIT FLIP</span>
        </DocumentHeading>
        <DocumentLine number={2} className="h-3" />
        <DocumentLine number={3}>
          <p className="font-mono text-[22px] leading-snug text-jb-text sm:text-[26px]">
            Programming tutoring,
            <br />
            without the headache.
          </p>
        </DocumentLine>
        <DocumentLine number={4} className="h-3" />
        <DocumentLine number={5}>
          <p className="font-mono text-[14px]">
            <span className="text-jb-blue">Python</span>
            <span className="text-jb-muted"> · </span>
            <span className="text-jb-orange">Java</span>
            <span className="text-jb-muted"> · </span>
            <span className="text-jb-purple">C++</span>
          </p>
        </DocumentLine>
        <DocumentLine number={6}>
          <p className="font-mono text-[14px] text-jb-yellow">
            Irish Leaving Certificate
          </p>
        </DocumentLine>
        <DocumentLine number={7} className="h-4" />
        <DocumentLine number={8}>
          <p className="font-sans text-[15px] text-jb-secondary">
            Online lessons. Real code on screen. First one free.
          </p>
        </DocumentLine>
        <DocumentLine number={9}>
          <p className="font-sans text-[15px] text-jb-cyan">
            Ireland-based tutors. Evenings and weekends.
          </p>
        </DocumentLine>
        <DocumentLine number={10}>
          <p className="mt-1 font-mono text-[13px] text-jb-green">
            First lesson free.
          </p>
        </DocumentLine>
        <DocumentLine number={11} className="h-6" />
        <DocumentLine number={12}>
          <div className="flex flex-wrap gap-3">
            <Button onClick={onBookSession}>Book a Session</Button>
            <Button variant="secondary" onClick={onMeetTutors}>
              Meet the Tutors
            </Button>
          </div>
        </DocumentLine>
      </EditorSurface>

      <div className="mt-12 space-y-8">
        <div>
          <DocumentHeading level={2}>
            <span className="text-jb-purple">## </span>
            What we do
          </DocumentHeading>
          <Prose className="mt-4 max-w-2xl">
            <p>
              Stuck on a loop, a class hierarchy, or a past paper? We sit with
              you, write code, and talk through what&apos;s going wrong until it
              makes sense.
            </p>
            <p className="mt-3">
              Copying a finished answer feels productive for about ten minutes.
              We&apos;d rather you leave able to try the next exercise without us.
            </p>
          </Prose>
        </div>

        <Divider />

        <div>
          <DocumentHeading level={2}>
            <span className="text-jb-purple">## </span>
            What we teach
          </DocumentHeading>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {subjects.map((subject) => {
              const accent = subjectAccent[subject.id];
              return (
                <li
                  key={subject.id}
                  className={`flex items-center gap-3 border px-4 py-3 ${accent.border} ${accent.bg}`}
                >
                  <span
                    className={`size-2 shrink-0 rounded-full ${accent.dot}`}
                    aria-hidden="true"
                  />
                  <span className={`font-mono text-[13px] ${accent.text}`}>
                    {subject.file}
                  </span>
                  <span className="font-sans text-[14px] text-jb-secondary">
                    {subject.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
