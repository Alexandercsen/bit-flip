import { cn } from "@/lib/cn";
import { fileDot } from "@/lib/colors";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-jb-blue bg-jb-blue text-jb-editor hover:bg-[#5a8ff5] focus-visible:ring-jb-blue",
  secondary:
    "border-jb-blue/35 bg-jb-blue/10 text-jb-blue hover:border-jb-blue/60 hover:bg-jb-blue/15 focus-visible:ring-jb-blue",
  ghost:
    "border-transparent bg-transparent text-jb-secondary hover:bg-jb-surface hover:text-jb-cyan focus-visible:ring-jb-blue",
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
        "inline-flex items-center justify-center rounded-[5px] border px-4 py-2 font-mono text-[13px] transition-colors duration-150 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-jb-editor",
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
  "w-full rounded-[5px] border border-jb-border bg-jb-editor px-3 py-2 font-sans text-[14px] text-jb-text placeholder:text-jb-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jb-blue focus-visible:border-jb-blue transition-colors duration-150";

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
