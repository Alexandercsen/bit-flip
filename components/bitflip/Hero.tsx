"use client";

import { subjects } from "@/lib/content";
import { subjectAccent } from "@/lib/colors";
import { Button, Divider, Prose } from "./ui";
import { BrandLogo } from "./BrandLogo";

type HeroProps = {
  onBookSession: () => void;
  onMeetTutors: () => void;
};

export function Hero({ onBookSession, onMeetTutors }: HeroProps) {
  return (
    <section id="home" className="scroll-mt-20">
      <div className="hero-atmosphere relative overflow-hidden border-b border-jb-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <div className="section-fade">
            <BrandLogo size="hero" />
            <h1 className="mt-8 max-w-xl text-2xl font-medium leading-snug text-jb-text sm:text-3xl">
              Programming tutoring,
              <br />
              without the headache.
            </h1>
            <p className="mt-4 font-mono text-[14px] text-jb-secondary">
              <span className="text-jb-blue">Python</span>
              <span className="text-jb-muted"> · </span>
              <span className="text-jb-orange">Java</span>
              <span className="text-jb-muted"> · </span>
              <span className="text-jb-cyan">C</span>
              <span className="text-jb-muted"> · </span>
              <span className="text-jb-purple">C++</span>
              <span className="text-jb-muted"> · </span>
              <span className="text-jb-yellow">Irish Leaving Certificate</span>
            </p>
            <p className="mt-6 max-w-lg text-[16px] text-jb-secondary">
              Online lessons. Real code on screen. First one free.
            </p>
            <p className="mt-2 text-[16px] text-jb-link">
              Ireland-based tutors. Evenings and weekends.
            </p>
            <p className="mt-4 font-mono text-[13px] text-jb-green">
              First lesson free.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={onBookSession}>Book a Session</Button>
              <Button variant="secondary" onClick={onMeetTutors}>
                Meet the Tutors →
              </Button>
            </div>
          </div>

          <div
            className="section-fade relative hidden overflow-hidden rounded-xl border border-jb-border bg-jb-surface/80 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] lg:block"
            style={{ animationDelay: "120ms" }}
            aria-hidden="true"
          >
            <div className="flex items-center gap-2 border-b border-jb-border px-4 py-3">
              <span className="size-2.5 rounded-full bg-jb-red/80" />
              <span className="size-2.5 rounded-full bg-jb-yellow/80" />
              <span className="size-2.5 rounded-full bg-jb-green/80" />
              <span className="ml-3 font-mono text-[12px] text-jb-muted">
                lesson.py
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-jb-secondary">
              <code>
                <span className="text-jb-purple">def</span>{" "}
                <span className="text-jb-blue">break_it_down</span>
                <span className="text-jb-text">(problem):</span>
                {"\n"}
                {"    "}
                <span className="text-jb-muted"># understand first</span>
                {"\n"}
                {"    "}
                <span className="text-jb-purple">if</span>{" "}
                <span className="text-jb-text">not problem.clear:</span>
                {"\n"}
                {"        "}
                <span className="text-jb-purple">return</span>{" "}
                <span className="text-jb-text">ask_why()</span>
                {"\n\n"}
                {"    "}
                <span className="text-jb-text">steps = split(problem)</span>
                {"\n"}
                {"    "}
                <span className="text-jb-purple">for</span>{" "}
                <span className="text-jb-text">step in steps:</span>
                {"\n"}
                {"        "}
                <span className="text-jb-text">write(step)</span>
                {"\n"}
                {"        "}
                <span className="text-jb-text">debug(step)</span>
                {"\n\n"}
                {"    "}
                <span className="text-jb-purple">return</span>{" "}
                <span className="text-jb-green">&quot;try the next one alone&quot;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-jb-text sm:text-3xl">
            What we do
          </h2>
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
          <h2 className="text-2xl font-semibold tracking-tight text-jb-text sm:text-3xl">
            What we teach
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {subjects.map((subject) => {
              const accent = subjectAccent[subject.id];
              return (
                <li
                  key={subject.id}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-4 ${accent.border} ${accent.bg}`}
                >
                  <span
                    className={`size-2 shrink-0 rounded-full ${accent.dot}`}
                    aria-hidden="true"
                  />
                  <span className={`font-sans text-[16px] font-medium ${accent.text}`}>
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
