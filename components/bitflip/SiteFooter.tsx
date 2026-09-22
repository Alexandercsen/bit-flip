import Link from "next/link";
import { site } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-jb-border pt-6">
      <p className="font-sans text-[12px] text-jb-muted">
        © {year} {site.legalName}. All rights reserved.
      </p>

      <div className="mt-4 space-y-1 font-sans text-[13px] text-jb-secondary">
        <p className="font-mono text-[13px] text-jb-text">{site.name}</p>
        <p>{site.country}</p>
      </div>

      <nav
        className="mt-4 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[12px] text-jb-cyan"
        aria-label="Legal"
      >
        <Link
          href="/privacy"
          className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-blue"
        >
          Privacy Policy
        </Link>
        <span className="text-jb-muted" aria-hidden="true">
          ·
        </span>
        <Link
          href="/cookies"
          className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-blue"
        >
          Cookie Policy
        </Link>
        <span className="text-jb-muted" aria-hidden="true">
          ·
        </span>
        <Link
          href="/terms"
          className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-blue"
        >
          Terms &amp; Conditions
        </Link>
        <span className="text-jb-muted" aria-hidden="true">
          ·
        </span>
        <Link
          href="/#contact"
          className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-blue"
        >
          Contact
        </Link>
      </nav>

      <div className="mt-4 space-y-1 font-sans text-[12px] text-jb-muted">
        <p>
          <a
            href={`mailto:${site.email}`}
            className="text-jb-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-blue"
          >
            {site.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
