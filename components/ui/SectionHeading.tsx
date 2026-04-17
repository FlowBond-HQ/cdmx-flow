import type { ReactNode } from "react";
import { cn } from "./utils";

export type SectionHeadingTheme = "champagne" | "obsidian";

export type SectionHeadingProps = {
  theme?: SectionHeadingTheme;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
  /** Optional slot for actions (e.g. link) */
  actions?: ReactNode;
};

export function SectionHeading({
  theme = "champagne",
  title,
  subtitle,
  eyebrow,
  align = "left",
  className,
  actions,
}: SectionHeadingProps) {
  const isChampagne = theme === "champagne";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            isChampagne ? "text-champagne-goldDark" : "text-obsidian-gold",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <div
        className={cn(
          "flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
          align === "center" && "sm:flex-col sm:items-center",
        )}
      >
        <div className="max-w-3xl space-y-2">
          <h2
            className={cn(
              "text-balance text-3xl font-medium sm:text-4xl",
              isChampagne
                ? "font-serif text-champagne-ink"
                : "font-sans text-obsidian-ivory",
            )}
          >
            {title}
          </h2>
          {subtitle ? (
            <p
              className={cn(
                "max-w-2xl text-base leading-relaxed",
                isChampagne ? "text-champagne-ink/85" : "text-obsidian-goldLight/90",
              )}
            >
              {subtitle}
            </p>
          ) : null}
        </div>
        {actions ? (
          <div className={cn("shrink-0", align === "center" && "sm:mx-auto")}>
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  );
}
