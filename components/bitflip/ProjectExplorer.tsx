"use client";

import { cn } from "@/lib/cn";
import type { TreeNode } from "@/lib/content";
import { fileAccent } from "@/lib/colors";
import { FileIcon } from "./ui";

type ProjectExplorerProps = {
  tree: TreeNode[];
  activeId: string;
  onNavigate: (id: string) => void;
  className?: string;
  id?: string;
};

export function ProjectExplorer({
  tree,
  activeId,
  onNavigate,
  className,
  id,
}: ProjectExplorerProps) {
  return (
    <aside
      id={id}
      className={cn(
        "flex w-56 shrink-0 flex-col border-r border-jb-border bg-jb-tool",
        className
      )}
      aria-label="Project explorer"
    >
      <div className="border-b border-jb-border px-3 py-2 font-mono text-[11px] tracking-wide text-jb-cyan uppercase">
        Project
      </div>
      <nav className="flex-1 overflow-y-auto p-2">
        <div className="mb-1 px-2 font-mono text-[12px] text-jb-yellow">
          <span className="text-jb-yellow">▾</span> BIT-FLIP
        </div>
        <ul className="space-y-0.5">
          {tree.map((node) => (
            <TreeBranch
              key={node.id}
              node={node}
              depth={1}
              activeId={activeId}
              onNavigate={onNavigate}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

function TreeBranch({
  node,
  depth,
  activeId,
  onNavigate,
}: {
  node: TreeNode;
  depth: number;
  activeId: string;
  onNavigate: (id: string) => void;
}) {
  const hasChildren = Boolean(node.children?.length);
  const isActive = activeId === node.id;
  const isChildActive = node.children?.some(
    (c) => c.id === activeId || c.children?.some((gc) => gc.id === activeId)
  );

  return (
    <li>
      <button
        type="button"
        onClick={() => onNavigate(node.id)}
        className={cn(
          "flex w-full items-center gap-1.5 rounded-[4px] py-1 pr-2 text-left font-mono text-[12px] transition-colors duration-150",
          "hover:bg-jb-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-jb-blue",
          isActive
            ? "bg-jb-blue/15 text-jb-text ring-1 ring-inset ring-jb-blue/25"
            : isChildActive
              ? "text-jb-secondary"
              : "text-jb-muted"
        )}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
        aria-current={isActive ? "true" : undefined}
      >
        {hasChildren ? (
          <span className="text-jb-yellow" aria-hidden="true">
            ▾
          </span>
        ) : (
          <FileIcon filename={node.file} />
        )}
        <span className={cn(isActive ? "text-jb-text" : fileAccent(node.file))}>
          {node.label}
        </span>
      </button>
      {hasChildren && (
        <ul>
          {node.children!.map((child) => (
            <TreeBranch
              key={child.id}
              node={child}
              depth={depth + 1}
              activeId={activeId}
              onNavigate={onNavigate}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
