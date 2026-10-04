"use client";

import { tutors } from "@/lib/content";
import { Button, Card, Prose, SectionHeading } from "./ui";
import { TutorPhoto } from "./TutorPhoto";

type TutorsProps = {
  onBookSession: () => void;
};

export function Tutors({ onBookSession }: TutorsProps) {
  return (
    <section
      id="tutors"
      className="scroll-mt-20 border-t border-jb-border bg-jb-main"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 py-20 sm:px-6 lg:px-8">
        <div>
          <SectionHeading eyebrow="Tutors">
            Meet the people behind BIT FLIP STUDIO
          </SectionHeading>
          <Prose className="mt-4">
            Profiles below. LinkedIn if you want more background.
          </Prose>
        </div>

        {tutors.map((tutor, tutorIndex) => (
          <article
            key={tutor.id}
            id={tutor.id}
            className="scroll-mt-24"
          >
            <Card
              className={
                tutorIndex === 0
                  ? "border-l-[3px] border-l-jb-blue"
                  : "border-l-[3px] border-l-jb-purple"
              }
            >
              <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
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
                    className={`flex size-32 shrink-0 items-center justify-center rounded-xl border font-mono text-[11px] ${
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
                    className={`text-[24px] font-semibold ${
                      tutorIndex === 0 ? "text-jb-blue" : "text-jb-purple"
                    }`}
                  >
                    {tutor.name}
                  </h3>
                  <p className="mt-1 text-[15px] text-jb-secondary">
                    {tutor.role}
                  </p>
                  <p className="mt-3 font-mono text-[13px]">
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
                                : subject === "C"
                                  ? "text-jb-cyan"
                                  : subject === "C++"
                                    ? "text-jb-purple"
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
                      className="mt-3 inline-block rounded-full border border-jb-cyan/40 bg-jb-cyan/10 px-2.5 py-1 font-mono text-[12px] text-jb-cyan"
                    >
                      {note}
                    </p>
                  ))}
                  {tutor.linkedin && (
                    <a
                      href={tutor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-[14px] text-jb-link hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-link"
                    >
                      LinkedIn profile →
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-8 border-t border-jb-border pt-6">
                <h4 className="font-mono text-[12px] uppercase tracking-[0.12em] text-jb-muted">
                  About
                </h4>
                <Prose className="mt-3 max-w-3xl space-y-3">
                  {tutor.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </Prose>
              </div>
            </Card>
          </article>
        ))}

        <Button onClick={onBookSession}>Book a Session</Button>
      </div>
    </section>
  );
}
