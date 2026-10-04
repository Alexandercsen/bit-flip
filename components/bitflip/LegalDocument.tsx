import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/bitflip/SiteFooter";
import { BrandLogo } from "@/components/bitflip/BrandLogo";
import { site } from "@/lib/content";

type LegalSection = {
  heading: string;
  body: string[];
};

export function buildLegalMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title: `${title} | ${site.name}`,
    description,
  };
}

export function LegalDocument({
  title,
  lastUpdated,
  sections,
}: {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="min-h-dvh bg-jb-bg text-jb-text">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-jb-link transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-link"
        >
          <span className="text-[13px] text-jb-muted">←</span>
          <BrandLogo size="nav" />
        </Link>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-jb-text sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-[13px] text-jb-muted">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-[17px] font-semibold text-jb-text">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-jb-secondary">
                {section.body.map((paragraph, index) => (
                  <p key={`${section.heading}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14">
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
