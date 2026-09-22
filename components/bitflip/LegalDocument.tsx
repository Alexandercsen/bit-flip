import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/bitflip/SiteFooter";

type LegalSection = {
  heading: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  description: string;
};

export function buildLegalMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title: `${title} | BIT FLIP`,
    description,
  };
}

export function LegalDocument({
  title,
  lastUpdated,
  sections,
}: Omit<LegalPageProps, "description">) {
  return (
    <div className="min-h-dvh bg-jb-main text-jb-text">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-mono text-[12px] text-jb-muted">
          <Link
            href="/"
            className="text-jb-cyan hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-blue"
          >
            ← BIT FLIP
          </Link>
        </p>

        <h1 className="mt-6 font-mono text-[28px] text-jb-text">{title}</h1>
        <p className="mt-2 font-sans text-[13px] text-jb-muted">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-mono text-[16px] text-jb-cyan">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 font-sans text-[15px] leading-relaxed text-jb-secondary">
                {section.body.map((paragraph, index) => (
                  <p key={`${section.heading}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <SiteFooter />
      </div>
    </div>
  );
}
