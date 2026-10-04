import { howItWorks } from "@/lib/content";
import { Card, Prose, SectionHeading } from "./ui";

const stepColors = [
  "text-jb-blue",
  "text-jb-green",
  "text-jb-yellow",
  "text-jb-purple",
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-t border-jb-border bg-jb-main"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading>How it works</SectionHeading>
        <Prose className="mt-4 max-w-2xl">
          Four steps. No onboarding portal.
        </Prose>

        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {howItWorks.map((step, index) => (
            <li key={step.step}>
              <Card>
                <span
                  className={`font-mono text-[12px] ${stepColors[index]}`}
                >
                  {step.step}
                </span>
                <h3 className="mt-2 text-[18px] font-semibold text-jb-text">
                  {step.title}
                </h3>
                <Prose className="mt-2 text-[15px]">{step.description}</Prose>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
