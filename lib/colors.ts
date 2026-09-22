/** JetBrains-style file type colors by extension / id */
export function fileAccent(filename: string): string {
  if (filename.endsWith(".py")) return "text-jb-blue";
  if (filename.endsWith(".java")) return "text-jb-orange";
  if (filename.endsWith(".cpp") || filename.endsWith(".h")) return "text-jb-purple";
  if (filename.endsWith(".md")) return "text-jb-green";
  if (filename.endsWith("/")) return "text-jb-yellow";
  return "text-jb-secondary";
}

export function fileDot(filename: string): string {
  if (filename.endsWith(".py")) return "bg-jb-blue";
  if (filename.endsWith(".java")) return "bg-jb-orange";
  if (filename.endsWith(".cpp") || filename.endsWith(".h")) return "bg-jb-purple";
  if (filename.endsWith(".md")) return "bg-jb-green";
  if (filename.endsWith("/")) return "bg-jb-yellow";
  return "bg-jb-muted";
}

export const subjectAccent: Record<
  string,
  { text: string; border: string; bg: string; dot: string }
> = {
  python: {
    text: "text-jb-blue",
    border: "border-jb-blue/40",
    bg: "bg-jb-blue/10",
    dot: "bg-jb-blue",
  },
  java: {
    text: "text-jb-orange",
    border: "border-jb-orange/40",
    bg: "bg-jb-orange/10",
    dot: "bg-jb-orange",
  },
  cpp: {
    text: "text-jb-purple",
    border: "border-jb-purple/40",
    bg: "bg-jb-purple/10",
    dot: "bg-jb-purple",
  },
  "leaving-cert": {
    text: "text-jb-yellow",
    border: "border-jb-yellow/40",
    bg: "bg-jb-yellow/10",
    dot: "bg-jb-yellow",
  },
};
