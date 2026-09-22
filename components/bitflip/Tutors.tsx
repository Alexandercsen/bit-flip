"use client";

import { tutors } from "@/lib/content";
import { Button } from "./ui";
import { TutorPhoto } from "./TutorPhoto";
import {
  CodeMeta,
  DocumentHeading,
  EditorSurface,
  Prose,
} from "./Document";

type TutorsProps = {
  onBookSession: () => void;
};

export function Tutors({ onBookSession }: TutorsProps) {
  return (
    <section id="tutors" className="scroll-mt-4 space-y-12">
      <div>
        <DocumentHeading level={1}>
          <span className="text-jb-purple">tutors/</span>
        </DocumentHeading>
        <Prose className="mt-4">
          Profiles below. LinkedIn if you want more background.
        </Prose>
      </div>

      {tutors.map((tutor, tutorIndex) => (
        <article
          key={tutor.id}
          id={tutor.id}
          className="scroll-mt-4"
        >
          <EditorSurface
            className={`p-0 border-l-[3px] ${
              tutorIndex === 0 ? "border-l-jb-blue" : "border-l-jb-purple"
            }`}
          >
            <div
              className={`border-b border-jb-border px-6 py-2 font-mono text-[12px] ${
                tutorIndex === 0 ? "text-jb-blue" : "text-jb-purple"
              }`}
            >
              tutors/{tutor.file}
            </div>

            <div className="grid gap-6 p-6 lg:grid-cols-[auto_1fr]">
              {tutor.photo ? (
                <TutorPhoto
                  src={tutor.photo}
                  alt={`Photo of ${tutor.name}`}
                  size={128}
                  className={
                    tutorIndex === 0
                      ? "border-jb-blue/40"
                      : "border-jb-purple/40"
                  }
                />
              ) : (
                <div
                  className={`flex size-32 shrink-0 items-center justify-center border font-mono text-[11px] ${
                    tutorIndex === 0
                      ? "border-jb-blue/40 bg-jb-blue/10 text-jb-blue"
                      : "border-jb-purple/40 bg-jb-purple/10 text-jb-purple"
                  }`}
                  role="img"
                  aria-label={`Photo placeholder for ${tutor.name}`}
                >
                  photo
                </div>
              )}
              <div>
                <h3
                  className={`font-mono text-[20px] ${
                    tutorIndex === 0 ? "text-jb-blue" : "text-jb-purple"
                  }`}
                >
                  {tutor.name}
                </h3>
                <p className="mt-1 font-sans text-[14px] text-jb-secondary">
                  {tutor.role}
                </p>
                <p className="mt-2 font-mono text-[12px]">
                  {tutor.subjects.map((subject, i) => (
                    <span key={subject}>
                      {i > 0 && (
                        <span className="text-jb-muted"> · </span>
                      )}
                      <span
                        className={
                          subject === "Python"
                            ? "text-jb-blue"
                            : subject === "Java"
                              ? "text-jb-orange"
                              : subject === "C++"
                                ? "text-jb-purple"
                                : subject === "French"
                                  ? "text-jb-cyan"
                                  : "text-jb-yellow"
                        }
                      >
                        {subject}
                      </span>
                    </span>
                  ))}
                </p>
                {tutor.notes?.map((note) => (
                  <p
                    key={note}
                    className="mt-3 inline-block rounded-[4px] border border-jb-cyan/40 bg-jb-cyan/10 px-2.5 py-1 font-mono text-[12px] text-jb-cyan"
                  >
                    {note}
                  </p>
                ))}
                {tutor.linkedin && (
                  <a
                    href={tutor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-mono text-[12px] text-jb-cyan hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-blue"
                  >
                    LinkedIn profile
                  </a>
                )}
              </div>
            </div>

            <div className="border-t border-jb-border px-6 py-6">
              <CodeMeta
                lines={[
                  {
                    num: 1,
                    tokens: [
                      { text: "class ", color: "purple" },
                      { text: tutor.className, color: "blue" },
                      { text: ":" },
                    ],
                  },
                  { num: 2, tokens: [{ text: "" }] },
                  {
                    num: 3,
                    tokens: [
                      { text: "    role = ", color: "default" },
                      { text: `"${tutor.role}"`, color: "green" },
                    ],
                  },
                  { num: 4, tokens: [{ text: "" }] },
                  { num: 5, tokens: [{ text: "    teaches = [", color: "default" }] },
                  ...tutor.subjects.map((s, i) => ({
                    num: 6 + i,
                    tokens: [
                      { text: "        ", color: "default" },
                      { text: `"${s}"`, color: "green" },
                      { text: ",", color: "default" },
                    ],
                  })),
                  {
                    num: 6 + tutor.subjects.length,
                    tokens: [{ text: "    ]", color: "default" }],
                  },
                  { num: 7 + tutor.subjects.length, tokens: [{ text: "" }] },
                  {
                    num: 8 + tutor.subjects.length,
                    tokens: [
                      { text: "    approach = ", color: "default" },
                      { text: `"${tutor.approach}"`, color: "green" },
                    ],
                  },
                ]}
              />
            </div>

            <div className="border-t border-jb-border px-6 py-6">
              <h4 className="font-mono text-[13px] text-jb-cyan">About</h4>
              <Prose className="mt-3 max-w-2xl space-y-3">
                {tutor.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </Prose>
            </div>
          </EditorSurface>
        </article>
      ))}

      <div className="flex justify-start">
        <Button onClick={onBookSession}>Book a Session</Button>
      </div>
    </section>
  );
}
