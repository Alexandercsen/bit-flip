"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/lib/content";
import { Button } from "./ui";

const links = [
  { id: "about", label: "About" },
  { id: "subjects", label: "Subjects" },
  { id: "tutors", label: "Tutors" },
  { id: "for-parents", label: "Parents" },
  { id: "how-it-works", label: "How it works" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
] as const;

type SiteNavProps = {
  onNavigate: (id: string) => void;
  onBook: () => void;
};

export function SiteNav({ onNavigate, onBook }: SiteNavProps) {
  const [open, setOpen] = useState(false);

  function go(id: string) {
    onNavigate(id);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-jb-border/80 bg-jb-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => go("home")}
          className="font-sans text-[15px] font-semibold tracking-[0.08em] text-jb-text transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-link"
        >
          {site.name}
        </button>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              className="rounded-full px-3 py-1.5 font-sans text-[13px] text-jb-secondary transition-colors hover:bg-jb-elevated hover:text-jb-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-link"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            className="hidden sm:inline-flex"
            onClick={onBook}
          >
            Book a session
          </Button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-jb-border text-jb-text lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="font-mono text-[18px]">
              {open ? "×" : "≡"}
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-jb-border bg-jb-surface lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label="Mobile">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              className="rounded-lg px-3 py-2.5 text-left font-sans text-[15px] text-jb-secondary hover:bg-jb-elevated hover:text-jb-text"
            >
              {link.label}
            </button>
          ))}
          <Button className="mt-2 w-full sm:hidden" onClick={onBook}>
            Book a session
          </Button>
        </nav>
      </div>
    </header>
  );
}
