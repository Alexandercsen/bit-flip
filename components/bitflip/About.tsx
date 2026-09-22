import {
  beliefs,
  tutors,
  whyBitFlip,
} from "@/lib/content";
import { cn } from "@/lib/cn";
import { Button, Divider } from "./ui";
import {
  DocumentHeading,
  EditorSurface,
  Prose,
} from "./Document";
import { TutorPhoto } from "./TutorPhoto";

type AboutProps = {
  onBookSession: () => void;
  onContact: () => void;
  onViewTutor: (id: string) => void;
};

export function About({ onBookSession, onContact, onViewTutor }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-4 space-y-10">
      <EditorSurface>
        <DocumentHeading level={1}>
          <span className="text-jb-purple"># </span>
          About BIT FLIP
        </DocumentHeading>

        <Prose className="mt-6 max-w-2xl space-y-4">
          <p className="text-jb-text">
            BIT FLIP is online tutoring for Python, Java, C++, and Leaving
            Certificate Computer Science.
          </p>
          <p className="font-mono text-[16px] text-jb-cyan">
            Most people don&apos;t need another course. They need someone who
            will sit with the code until it clicks.
          </p>
          <p>
            We&apos;re two programmers. We debug for real, we teach what we use,
            and we&apos;re not interested in making programming sound mystical.
          </p>
          <p>
            First lesson free. If it isn&apos;t useful, stop. No sales pitch
            after that.
          </p>
        </Prose>

        <Divider className="my-8" />

        <DocumentHeading level={2}>
          <span className="text-jb-purple">## </span>
          Why we bother
        </DocumentHeading>
        <Prose className="mt-4 max-w-2xl space-y-4">
          <p>
            We&apos;ve been the person staring at an error for an hour, then
            feeling stupid when the fix was a missing return.
          </p>
          <p>
            We&apos;ve also had that quiet relief when someone finally explains
            the idea in plain language.
          </p>
          <p>
            That second moment is the whole product. If you leave a lesson still
            dependent on us for every line, we failed.
          </p>
        </Prose>

        <Divider className="my-8" />

        <DocumentHeading level={2}>
          <span className="text-jb-purple">## </span>
          Who teaches
        </DocumentHeading>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {tutors.map((tutor, i) => (
            <article
              key={tutor.id}
              className={cn(
                "rounded-[6px] border p-5",
                i === 0
                  ? "border-jb-blue/40 bg-jb-blue/10"
                  : "border-jb-purple/40 bg-jb-purple/10"
              )}
            >
              <p
                className={cn(
                  "font-mono text-[12px]",
                  i === 0 ? "text-jb-blue" : "text-jb-purple"
                )}
              >
                tutors/{tutor.file}
              </p>
              <div className="mt-3 flex items-start gap-3">
                {tutor.photo ? (
                  <TutorPhoto
                    src={tutor.photo}
                    alt={`Photo of ${tutor.name}`}
                    size={64}
                    className={
                      i === 0 ? "border-jb-blue/40" : "border-jb-purple/40"
                    }
                  />
                ) : null}
                <div>
                  <h3 className="font-mono text-[16px] text-jb-text">
                    {tutor.name}
                  </h3>
                  <p className="mt-1 font-sans text-[14px] text-jb-secondary">
                    {tutor.role}
                  </p>
                </div>
              </div>
              <Prose className="mt-3 text-[14px]">{tutor.shortIntro}</Prose>
              {tutor.notes?.map((note) => (
                <p
                  key={note}
                  className="mt-2 inline-block rounded-[4px] border border-jb-cyan/40 bg-jb-cyan/10 px-2.5 py-1 font-mono text-[12px] text-jb-cyan"
                >
                  {note}
                </p>
              ))}
              <div className="mt-4 flex flex-wrap gap-3">
                <Button
                  variant="secondary"
                  onClick={() => onViewTutor(tutor.id)}
                >
                  View Tutor Profile
                </Button>
                {tutor.linkedin && (
                  <a
                    href={tutor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-[5px] border border-jb-border px-4 py-2 font-mono text-[13px] text-jb-cyan transition-colors duration-150 hover:border-jb-cyan/50 hover:bg-jb-cyan/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-blue"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-4 font-sans text-[13px] text-jb-muted">
          Two tutors, different strengths. Tell us what you&apos;re working on
          and we&apos;ll say who fits better.
        </p>
      </EditorSurface>

      <EditorSurface>
        <DocumentHeading level={2}>
          <span className="text-jb-purple">## </span>
          How we teach
        </DocumentHeading>
        <ol className="mt-6 space-y-4">
          {whyBitFlip.map((item, index) => {
            const colors = [
              "text-jb-blue",
              "text-jb-green",
              "text-jb-yellow",
              "text-jb-purple",
              "text-jb-cyan",
            ];
            return (
              <li key={item.step} className="flex gap-4">
                <span
                  className={`shrink-0 font-mono text-[13px] ${colors[index]}`}
                >
                  {item.step}
                </span>
                <div>
                  <h3 className="font-mono text-[15px] text-jb-text">
                    {item.title}
                  </h3>
                  <Prose className="mt-1 text-[14px]">{item.description}</Prose>
                </div>
              </li>
            );
          })}
        </ol>

        <Divider className="my-8" />

        <DocumentHeading level={2}>
          <span className="text-jb-purple">## </span>
          What we care about
        </DocumentHeading>
        <ol className="mt-4 space-y-2">
          {beliefs.map((belief, i) => (
            <li key={belief} className="flex gap-3 font-sans text-[14px]">
              <span className="shrink-0 font-mono text-jb-green">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-jb-secondary">{belief}</span>
            </li>
          ))}
        </ol>

        <Divider className="my-8" />

        <p className="font-mono text-[14px] text-jb-text">
          Want to try a lesson?
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button onClick={onBookSession}>Book a Session</Button>
          <Button variant="secondary" onClick={onContact}>
            Contact Us
          </Button>
        </div>
      </EditorSurface>
    </section>
  );
}
