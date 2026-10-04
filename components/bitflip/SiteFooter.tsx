import Link from "next/link";
import { site } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-jb-border pt-10">
      <p className="text-[13px] text-jb-muted">
        © {year} {site.legalName}. All rights reserved.
      </p>

      <div className="mt-4 space-y-1 text-[14px] text-jb-secondary">
        <p className="font-semibold tracking-[0.06em] text-jb-text">
          {site.name}
        </p>
        <p>{site.country}</p>
      </div>

      <nav
        className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-[13px] text-jb-link"
        aria-label="Legal"
      >
        <Link
          href="/privacy"
          className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-link"
        >
          Privacy Policy
        </Link>
        <span className="text-jb-muted" aria-hidden="true">
          ·
        </span>
        <Link
          href="/cookies"
          className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-link"
        >
          Cookie Policy
        </Link>
        <span className="text-jb-muted" aria-hidden="true">
          ·
        </span>
        <Link
          href="/terms"
          className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-link"
        >
          Terms &amp; Conditions
        </Link>
        <span className="text-jb-muted" aria-hidden="true">
          ·
        </span>
        <Link
          href="/#contact"
          className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-link"
        >
          Contact
        </Link>
      </nav>

      <div className="mt-5 space-y-1 text-[13px] text-jb-muted">
        <p>
          <a
            href={`mailto:${site.email}`}
            className="text-jb-link hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-link"
          >
            {site.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
