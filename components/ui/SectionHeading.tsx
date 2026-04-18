import type { ReactNode } from "react";
import { cn } from "./utils";

export type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
  /** Optional slot for actions (e.g. link) */
  actions?: ReactNode;
};

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "left",
  className,
  actions,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-obsidian-gold">{eyebrow}</p>
      ) : null}
      <div
        className={cn(
          "flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
          align === "center" && "sm:flex-col sm:items-center",
        )}
      >
        <div className="max-w-3xl space-y-2">
          <h2 className="text-balance font-sans text-3xl font-medium text-obsidian-ivory sm:text-4xl">{title}</h2>
          {subtitle ? (
            <p className="max-w-2xl text-base leading-relaxed text-obsidian-text-muted">{subtitle}</p>
          ) : null}
        </div>
        {actions ? (
          <div className={cn("shrink-0", align === "center" && "sm:mx-auto")}>{actions}</div>
        ) : null}
      </div>
    </div>
  );
}
