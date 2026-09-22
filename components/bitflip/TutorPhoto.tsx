"use client";

import { cn } from "@/lib/cn";

type TutorPhotoProps = {
  src: string;
  alt: string;
  className?: string;
  size?: number;
};

export function TutorPhoto({
  src,
  alt,
  className,
  size = 128,
}: TutorPhotoProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      className={cn(
        "tutor-photo relative shrink-0 overflow-hidden border bg-jb-tool select-none",
        className
      )}
      style={{ width: size, height: size }}
    >
      <div
        aria-hidden="true"
        className="tutor-photo-bg absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url("${src}")` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
