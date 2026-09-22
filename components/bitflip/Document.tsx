import { cn } from "@/lib/cn";

type LineProps = {
  number?: number;
  children?: React.ReactNode;
  className?: string;
};

export function DocumentLine({ number, children, className }: LineProps) {
  return (
    <div className={cn("flex gap-4 leading-[1.7]", className)}>
      {number !== undefined && (
        <span
          className="w-6 shrink-0 select-none text-right font-mono text-[12px] text-jb-muted"
          aria-hidden="true"
        >
          {String(number).padStart(2, "0")}
        </span>
      )}
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

export function DocumentHeading({
  level,
  children,
  line,
}: {
  level: 1 | 2 | 3;
  children: React.ReactNode;
  line?: number;
}) {
  const Tag = `h${level}` as "h1" | "h2" | "h3";
  const sizes = {
    1: "text-[32px] font-semibold leading-tight text-jb-text sm:text-[36px]",
    2: "text-[22px] font-semibold text-jb-text sm:text-[24px]",
    3: "text-[18px] font-medium text-jb-text",
  };

  const heading = (
    <Tag className={cn("font-mono", sizes[level])}>{children}</Tag>
  );

  if (line !== undefined) {
    return <DocumentLine number={line}>{heading}</DocumentLine>;
  }

  return heading;
}

export function CodeMeta({
  lines,
}: {
  lines: Array<{ num: number; tokens: Array<{ text: string; color?: string }> }>;
}) {
  const colors: Record<string, string> = {
    purple: "text-jb-purple",
    blue: "text-jb-blue",
    green: "text-jb-green",
    yellow: "text-jb-yellow",
    orange: "text-jb-orange",
    cyan: "text-jb-cyan",
    red: "text-jb-red",
    muted: "text-jb-muted",
    default: "text-jb-text",
  };

  return (
    <div className="overflow-x-auto rounded-[6px] border border-jb-border bg-jb-tool/80 p-4 font-mono text-[13px] shadow-[inset_0_0_0_1px_rgba(107,159,255,0.06)]">
      {lines.map((line) => (
        <div key={line.num} className="flex gap-4 leading-[1.7]">
          <span className="w-6 shrink-0 select-none text-right text-[12px] text-jb-blue/50">
            {String(line.num).padStart(2, "0")}
          </span>
          <span>
            {line.tokens.map((token, i) => (
              <span key={i} className={colors[token.color ?? "default"]}>
                {token.text}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}

export function EditorSurface({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[6px] border border-jb-border bg-jb-editor p-6 sm:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("font-sans text-[15px] leading-relaxed text-jb-secondary", className)}>
      {children}
    </div>
  );
}
