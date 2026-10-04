import { cn } from "@/lib/cn";
import { fileDot } from "@/lib/colors";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-white/80 bg-black text-jb-text hover:bg-jb-elevated focus-visible:ring-jb-link",
  secondary:
    "border-transparent bg-transparent text-jb-link hover:text-jb-text focus-visible:ring-jb-link",
  ghost:
    "border-transparent bg-transparent text-jb-secondary hover:bg-jb-elevated hover:text-jb-text focus-visible:ring-jb-link",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-5 py-2.5 font-sans text-[14px] font-medium transition-colors duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-jb-bg",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export const inputClassName =
  "w-full rounded-xl border border-jb-border bg-jb-surface px-3.5 py-2.5 font-sans text-[15px] text-jb-text placeholder:text-jb-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-link focus-visible:border-jb-link transition-colors duration-150";

export function Divider({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-jb-border", className)} />;
}

export function FileIcon({
  filename,
  className,
}: {
  filename: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block size-1.5 shrink-0 rounded-full",
        fileDot(filename),
        className
      )}
      aria-hidden="true"
    />
  );
}

export function SectionHeading({
  eyebrow,
  children,
  className,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.14em] text-jb-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-jb-text sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-jb-border bg-jb-surface p-6 transition-colors duration-200 hover:border-jb-border-strong hover:bg-jb-elevated",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "font-sans text-[16px] leading-relaxed text-jb-secondary",
        className
      )}
    >
      {children}
    </div>
  );
}
