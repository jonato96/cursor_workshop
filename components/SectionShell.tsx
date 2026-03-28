import type { ReactNode } from "react";

type Tone = "canvas" | "muted" | "white" | "dark";

const toneClass: Record<Tone, string> = {
  canvas: "bg-[#f4f4f5] text-zinc-900",
  muted: "bg-zinc-100/80 text-zinc-900",
  white: "bg-white text-zinc-900",
  dark: "bg-zinc-950 text-zinc-200",
};

export function SectionShell({
  id,
  ariaLabelledBy,
  tone = "white",
  border = true,
  className = "",
  innerClassName = "",
  children,
}: {
  id?: string;
  ariaLabelledBy?: string;
  tone?: Tone;
  border?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`${toneClass[tone]} ${border ? "border-b border-zinc-200/70" : ""} py-20 md:py-28 ${className}`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
