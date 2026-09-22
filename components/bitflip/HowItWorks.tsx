import { howItWorks } from "@/lib/content";
import { DocumentHeading, DocumentLine, EditorSurface, Prose } from "./Document";

const stepColors = [
  "text-jb-blue",
  "text-jb-green",
  "text-jb-yellow",
  "text-jb-purple",
] as const;

const stepBorders = [
  "border-jb-blue/40",
  "border-jb-green/40",
  "border-jb-yellow/40",
  "border-jb-purple/40",
] as const;

const stepBgs = [
  "bg-jb-blue/10",
  "bg-jb-green/10",
  "bg-jb-yellow/10",
  "bg-jb-purple/10",
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-4">
      <EditorSurface>
        <DocumentHeading level={1} line={1}>
          <span className="text-jb-purple"># </span>
          How it works
        </DocumentHeading>
        <DocumentLine number={2} className="h-4" />
        <Prose className="mb-6 max-w-2xl text-[14px]">
          Four steps. No onboarding portal.
        </Prose>

        <ol className="space-y-3">
          {howItWorks.map((step, index) => (
            <li
              key={step.step}
              className={`flex gap-4 rounded-[6px] border px-4 py-4 ${stepBorders[index]} ${stepBgs[index]}`}
            >
              <span
                className={`shrink-0 font-mono text-[13px] ${stepColors[index]}`}
              >
                {step.step}
              </span>
              <div>
                <h3 className="font-mono text-[16px] text-jb-text">
                  {step.title}
                </h3>
                <Prose className="mt-1 text-[14px]">{step.description}</Prose>
              </div>
            </li>
          ))}
        </ol>
      </EditorSurface>
    </section>
  );
}
