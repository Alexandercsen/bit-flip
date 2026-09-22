"use client";

import { subjects, type Subject } from "@/lib/content";
import { subjectAccent } from "@/lib/colors";
import { Button } from "./ui";
import {
  CodeMeta,
  DocumentHeading,
  EditorSurface,
  Prose,
} from "./Document";

type SubjectsProps = {
  onBookSession: () => void;
  onAskAbout: (subject: string) => void;
};

type Token = { text: string; color?: string };
type CodeLine = { num: number; tokens: Token[] };

function subjectCodeLines(subject: Subject): CodeLine[] {
  switch (subject.id) {
    case "python":
      return [
        {
          num: 1,
          tokens: [
            { text: "class ", color: "purple" },
            { text: "Python", color: "blue" },
            { text: ":" },
          ],
        },
        { num: 2, tokens: [{ text: "" }] },
        {
          num: 3,
          tokens: [
            { text: "    level = ", color: "default" },
            { text: `"${subject.level}"`, color: "green" },
          ],
        },
        { num: 4, tokens: [{ text: "" }] },
        { num: 5, tokens: [{ text: "    topics = [", color: "default" }] },
        ...subject.codeTopics.map((topic, i) => ({
          num: 6 + i,
          tokens: [
            { text: "        ", color: "default" },
            { text: `"${topic}"`, color: "green" },
            { text: ",", color: "muted" },
          ],
        })),
        {
          num: 6 + subject.codeTopics.length,
          tokens: [{ text: "    ]", color: "default" }],
        },
      ];

    case "java":
      return [
        {
          num: 1,
          tokens: [
            { text: "public ", color: "purple" },
            { text: "class ", color: "purple" },
            { text: "Java", color: "blue" },
            { text: " {" },
          ],
        },
        { num: 2, tokens: [{ text: "" }] },
        {
          num: 3,
          tokens: [
            { text: "    String ", color: "blue" },
            { text: "level = ", color: "default" },
            { text: `"${subject.level}"`, color: "green" },
            { text: ";", color: "muted" },
          ],
        },
        { num: 4, tokens: [{ text: "" }] },
        {
          num: 5,
          tokens: [
            { text: "    String[] ", color: "blue" },
            { text: "topics = {", color: "default" },
          ],
        },
        ...subject.codeTopics.map((topic, i) => ({
          num: 6 + i,
          tokens: [
            { text: "        ", color: "default" },
            { text: `"${topic}"`, color: "green" },
            {
              text: i < subject.codeTopics.length - 1 ? "," : "",
              color: "muted",
            },
          ],
        })),
        {
          num: 6 + subject.codeTopics.length,
          tokens: [{ text: "    };", color: "default" }],
        },
        {
          num: 7 + subject.codeTopics.length,
          tokens: [{ text: "}", color: "default" }],
        },
      ];

    case "cpp":
      return [
        {
          num: 1,
          tokens: [
            { text: "#include ", color: "purple" },
            { text: "<string>", color: "green" },
          ],
        },
        {
          num: 2,
          tokens: [
            { text: "#include ", color: "purple" },
            { text: "<vector>", color: "green" },
          ],
        },
        { num: 3, tokens: [{ text: "" }] },
        {
          num: 4,
          tokens: [
            { text: "class ", color: "purple" },
            { text: "Cpp", color: "blue" },
            { text: " {" },
          ],
        },
        {
          num: 5,
          tokens: [{ text: "public:", color: "purple" }],
        },
        {
          num: 6,
          tokens: [
            { text: "    std::string ", color: "blue" },
            { text: "level = ", color: "default" },
            { text: `"${subject.level}"`, color: "green" },
            { text: ";", color: "muted" },
          ],
        },
        {
          num: 7,
          tokens: [
            { text: "    std::vector", color: "blue" },
            { text: "<", color: "default" },
            { text: "std::string", color: "blue" },
            { text: "> topics = {", color: "default" },
          ],
        },
        ...subject.codeTopics.map((topic, i) => ({
          num: 8 + i,
          tokens: [
            { text: "        ", color: "default" },
            { text: `"${topic}"`, color: "green" },
            {
              text: i < subject.codeTopics.length - 1 ? "," : "",
              color: "muted",
            },
          ],
        })),
        {
          num: 8 + subject.codeTopics.length,
          tokens: [{ text: "    };", color: "default" }],
        },
        {
          num: 9 + subject.codeTopics.length,
          tokens: [{ text: "};", color: "default" }],
        },
      ];

    case "leaving-cert":
      return [
        {
          num: 1,
          tokens: [
            { text: "# ", color: "purple" },
            { text: "Leaving Certificate", color: "blue" },
          ],
        },
        { num: 2, tokens: [{ text: "" }] },
        {
          num: 3,
          tokens: [
            { text: "level: ", color: "cyan" },
            { text: subject.level, color: "green" },
          ],
        },
        { num: 4, tokens: [{ text: "" }] },
        {
          num: 5,
          tokens: [
            { text: "## ", color: "purple" },
            { text: "Topics", color: "yellow" },
          ],
        },
        ...subject.codeTopics.map((topic, i) => ({
          num: 6 + i,
          tokens: [
            { text: "- ", color: "muted" },
            { text: topic, color: "green" },
          ],
        })),
      ];

    default:
      return [];
  }
}

export function Subjects({ onBookSession, onAskAbout }: SubjectsProps) {
  return (
    <section id="subjects" className="scroll-mt-4 space-y-12">
      <div>
        <DocumentHeading level={1}>
          <span className="text-jb-yellow">subjects/</span>
        </DocumentHeading>
        <Prose className="mt-4 max-w-2xl">
          <p>
            Four things we actually teach. Pick the one that matches your
            homework or exam. If you&apos;re unsure, say so in the contact form
            and we&apos;ll tell you where to start.
          </p>
        </Prose>
      </div>

      {subjects.map((subject) => {
        const accent = subjectAccent[subject.id];
        return (
          <article
            key={subject.id}
            id={`subject-${subject.id}`}
            className="scroll-mt-4"
          >
            <EditorSurface className={`${accent.border} border-l-[3px]`}>
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
                <h3 className={`font-mono text-[20px] ${accent.text}`}>
                  {subject.file}
                </h3>
                <span
                  className={`rounded-[4px] px-2 py-0.5 font-mono text-[11px] ${accent.bg} ${accent.text}`}
                >
                  {subject.name}
                </span>
              </div>

              <CodeMeta lines={subjectCodeLines(subject)} />

              <div className="mt-8">
                <h4 className={`font-mono text-[15px] ${accent.text}`}>
                  {subject.name}
                </h4>
                <Prose className="mt-2">{subject.description}</Prose>

                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="font-mono text-[12px] text-jb-cyan">
                      Topics
                    </dt>
                    <dd className="mt-2 border-t border-jb-border pt-3">
                      <ul className="space-y-1.5">
                        {subject.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-center gap-2 font-sans text-[14px] text-jb-secondary"
                          >
                            <span
                              className={`size-1.5 shrink-0 rounded-full ${accent.dot}`}
                              aria-hidden="true"
                            />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[12px] text-jb-cyan">Level</dt>
                    <dd className="mt-1 font-sans text-[14px] text-jb-yellow">
                      {subject.level}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-jb-border pt-6">
                <Button
                  variant="secondary"
                  onClick={() => onAskAbout(subject.name)}
                >
                  Ask About {subject.name}
                </Button>
              </div>
            </EditorSurface>
          </article>
        );
      })}

      <div className="flex justify-start">
        <Button onClick={onBookSession}>Book a Session</Button>
      </div>
    </section>
  );
}
