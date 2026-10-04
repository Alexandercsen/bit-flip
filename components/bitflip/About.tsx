import {
  beliefs,
  tutors,
  whyBitFlip,
} from "@/lib/content";
import { cn } from "@/lib/cn";
import { Button, Card, Divider, Prose, SectionHeading } from "./ui";
import { TutorPhoto } from "./TutorPhoto";

type AboutProps = {
  onBookSession: () => void;
  onContact: () => void;
  onViewTutor: (id: string) => void;
};

export function About({ onBookSession, onContact, onViewTutor }: AboutProps) {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-jb-border bg-jb-main"
    >
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-20 sm:px-6 lg:px-8">
        <div>
          <SectionHeading>About BIT FLIP STUDIO</SectionHeading>
          <Prose className="mt-6 max-w-2xl space-y-4">
            <p className="text-jb-text">
              BIT FLIP STUDIO is online tutoring for Python, Java, C, C++, and
              Leaving Certificate Computer Science.
            </p>
            <p className="text-[18px] font-medium text-jb-link">
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
        </div>

        <div>
          <SectionHeading>Why we bother</SectionHeading>
          <Prose className="mt-6 max-w-2xl space-y-4">
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
        </div>

        <div>
          <SectionHeading>Who teaches</SectionHeading>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {tutors.map((tutor, i) => (
              <Card
                key={tutor.id}
                className={cn(
                  i === 0 ? "border-jb-blue/35" : "border-jb-purple/35"
                )}
              >
                <div className="flex items-start gap-3">
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
                    <h3 className="text-[18px] font-semibold text-jb-text">
                      {tutor.name}
                    </h3>
                    <p className="mt-1 text-[14px] text-jb-secondary">
                      {tutor.role}
                    </p>
                  </div>
                </div>
                <Prose className="mt-4 text-[15px]">{tutor.shortIntro}</Prose>
                {tutor.notes?.map((note) => (
                  <p
                    key={note}
                    className="mt-2 inline-block rounded-full border border-jb-cyan/40 bg-jb-cyan/10 px-2.5 py-1 font-mono text-[12px] text-jb-cyan"
                  >
                    {note}
                  </p>
                ))}
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button
                    variant="secondary"
                    onClick={() => onViewTutor(tutor.id)}
                  >
                    View Tutor Profile →
                  </Button>
                  {tutor.linkedin && (
                    <a
                      href={tutor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-jb-border px-4 py-2 text-[14px] text-jb-link transition-colors hover:border-jb-link/50 hover:bg-jb-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-link"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-[14px] text-jb-muted">
            Two tutors, different strengths. Tell us what you&apos;re working on
            and we&apos;ll say who fits better.
          </p>
        </div>

        <div>
          <SectionHeading>How we teach</SectionHeading>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {whyBitFlip.map((item, index) => {
              const colors = [
                "text-jb-blue",
                "text-jb-green",
                "text-jb-yellow",
                "text-jb-purple",
                "text-jb-cyan",
              ];
              return (
                <li key={item.step}>
                  <Card>
                    <span
                      className={`font-mono text-[12px] ${colors[index]}`}
                    >
                      {item.step}
                    </span>
                    <h3 className="mt-2 text-[17px] font-semibold text-jb-text">
                      {item.title}
                    </h3>
                    <Prose className="mt-2 text-[15px]">{item.description}</Prose>
                  </Card>
                </li>
              );
            })}
          </ol>
        </div>

        <div>
          <SectionHeading>What we care about</SectionHeading>
          <ol className="mt-6 space-y-3">
            {beliefs.map((belief, i) => (
              <li key={belief} className="flex gap-3 text-[15px]">
                <span className="shrink-0 font-mono text-jb-green">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-jb-secondary">{belief}</span>
              </li>
            ))}
          </ol>
        </div>

        <Divider />

        <div>
          <p className="text-[18px] font-medium text-jb-text">
            Want to try a lesson?
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button onClick={onBookSession}>Book a Session</Button>
            <Button variant="secondary" onClick={onContact}>
              Contact Us →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
