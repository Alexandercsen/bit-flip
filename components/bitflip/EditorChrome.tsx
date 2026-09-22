"use client";

import { cn } from "@/lib/cn";
import { fileAccent } from "@/lib/colors";
import { FileIcon } from "./ui";

type EditorTab = {
  id: string;
  label: string;
};

type EditorTabsProps = {
  tabs: EditorTab[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function EditorTabs({ tabs, activeId, onSelect }: EditorTabsProps) {
  return (
    <div
      className="flex shrink-0 overflow-x-auto border-b border-jb-border bg-jb-main"
      role="tablist"
      aria-label="Open files"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(tab.id)}
            className={cn(
              "relative flex shrink-0 items-center gap-2 border-r border-jb-border px-4 py-2 font-mono text-[12px] transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-jb-blue",
              isActive
                ? "bg-jb-editor text-jb-text"
                : "bg-jb-main text-jb-muted hover:bg-jb-tool hover:text-jb-secondary"
            )}
          >
            {isActive && (
              <span
                className="absolute inset-x-0 top-0 h-[2px] bg-jb-blue"
                aria-hidden="true"
              />
            )}
            <FileIcon filename={tab.label} />
            <span className={isActive ? fileAccent(tab.label) : undefined}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function Breadcrumbs({ parts }: { parts: string[] }) {
  return (
    <div className="border-b border-jb-border bg-jb-editor px-4 py-1.5 font-mono text-[11px]">
      {parts.map((part, i) => {
        const isLast = i === parts.length - 1;
        return (
          <span key={`${part}-${i}`}>
            {i > 0 && <span className="mx-1.5 text-jb-muted">/</span>}
            <span
              className={
                isLast
                  ? fileAccent(part.includes(".") ? part : `${part}/`)
                  : "text-jb-cyan"
              }
            >
              {part}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export function StatusBar() {
  return (
    <footer
      className="flex shrink-0 items-center justify-between border-t border-jb-border bg-jb-blue px-0 font-mono text-[11px] text-white"
      role="contentinfo"
      aria-label="Status bar"
    >
      <div className="flex items-center">
        <span className="flex items-center gap-1.5 bg-jb-green px-3 py-1 text-jb-editor">
          <span className="size-1.5 rounded-full bg-jb-editor" aria-hidden="true" />
          Online
        </span>
        <span className="px-3 py-1">main</span>
      </div>
      <div className="flex items-center">
        <span className="px-3 py-1">UTF-8</span>
        <span className="px-3 py-1">LF</span>
        <span className="hidden px-3 py-1 sm:inline">JetBrains Mono</span>
        <span className="bg-jb-purple px-3 py-1 text-white">BIT FLIP</span>
      </div>
    </footer>
  );
}
