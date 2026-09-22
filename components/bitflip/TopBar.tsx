"use client";

import { Button } from "./ui";

type TopBarProps = {
  onContact: () => void;
  onToggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
};

export function TopBar({
  onContact,
  onToggleMobileMenu,
  mobileMenuOpen,
}: TopBarProps) {
  return (
    <header className="flex h-11 shrink-0 items-center border-b border-jb-border bg-jb-tool px-3">
      <span className="shrink-0 font-mono text-[13px] tracking-wide">
        <span className="text-jb-cyan">BIT</span>
        <span className="text-jb-text"> </span>
        <span className="text-jb-purple">FLIP</span>
      </span>

      <div className="ml-auto flex items-center gap-2">
        <Button
          variant="secondary"
          onClick={onContact}
          className="hidden px-3 py-1.5 sm:inline-flex"
        >
          Contact
        </Button>
        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="rounded-[5px] px-2 py-1 font-mono text-[12px] text-jb-secondary hover:bg-jb-surface hover:text-jb-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-blue lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-explorer"
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
