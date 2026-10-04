import { cn } from "@/lib/cn";

type BrandLogoProps = {
  size?: "nav" | "hero" | "footer";
  className?: string;
};

const sizeStyles = {
  nav: {
    wrap: "gap-2",
    mark: "text-[15px]",
    name: "text-[15px] leading-none tracking-[0.02em]",
    studio: "text-[10px] leading-none tracking-[0.22em]",
  },
  hero: {
    wrap: "gap-3",
    mark: "text-4xl sm:text-5xl lg:text-6xl",
    name: "text-4xl leading-none tracking-[0.01em] sm:text-5xl lg:text-6xl",
    studio: "mt-1.5 text-sm tracking-[0.28em] sm:text-base sm:tracking-[0.32em]",
  },
  footer: {
    wrap: "gap-2",
    mark: "text-[15px]",
    name: "text-[15px] leading-none tracking-[0.02em]",
    studio: "text-[10px] leading-none tracking-[0.22em]",
  },
} as const;

export function BrandLogo({ size = "nav", className }: BrandLogoProps) {
  const styles = sizeStyles[size];

  return (
    <span
      className={cn("inline-flex items-center", styles.wrap, className)}
      aria-label="BIT FLIP STUDIO"
    >
      <span
        className={cn(
          "shrink-0 font-mono font-bold tracking-tight text-jb-link",
          styles.mark
        )}
        aria-hidden="true"
      >
        &lt;/&gt;
      </span>
      <span className="flex min-w-0 flex-col items-start">
        <span className={cn("font-sans font-black text-jb-text", styles.name)}>
          BIT FLIP
        </span>
        <span
          className={cn(
            "font-sans font-semibold uppercase text-jb-link",
            styles.studio
          )}
        >
          Studio
        </span>
      </span>
    </span>
  );
}
