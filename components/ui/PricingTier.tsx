import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./utils";

export type PricingTierTheme = "champagne" | "obsidian";

export type PricingTierProps = {
  theme?: PricingTierTheme;
  name: string;
  /** Main price line, e.g. "$777 MXN" */
  priceLine: string;
  /** Optional second line, e.g. alternate currency */
  secondaryLine?: string;
  /** Short description under prices */
  description?: string;
  highlighted?: boolean;
  className?: string;
  footer?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function PricingTier({
  theme = "champagne",
  name,
  priceLine,
  secondaryLine,
  description,
  highlighted = false,
  className,
  footer,
  ...rest
}: PricingTierProps) {
  const isChampagne = theme === "champagne";

  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border p-6 transition-shadow",
        isChampagne
          ? highlighted
            ? "border-champagne-gold bg-champagne-surface shadow-md ring-1 ring-champagne-gold/40"
            : "border-champagne-border bg-champagne-bg"
          : highlighted
            ? "border-obsidian-gold bg-obsidian-surface shadow-md ring-1 ring-obsidian-gold/35"
            : "border-obsidian-border bg-obsidian-bg",
        className,
      )}
      {...rest}
    >
      <div className="space-y-1">
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-wide",
            isChampagne ? "text-champagne-goldDark" : "text-obsidian-gold",
          )}
        >
          {name}
        </p>
        <p
          className={cn(
            "text-2xl font-semibold tabular-nums sm:text-3xl",
            isChampagne ? "text-champagne-ink" : "text-obsidian-ivory",
          )}
        >
          {priceLine}
        </p>
        {secondaryLine ? (
          <p
            className={cn(
              "text-sm tabular-nums",
              isChampagne ? "text-champagne-goldDark" : "text-obsidian-goldLight",
            )}
          >
            {secondaryLine}
          </p>
        ) : null}
      </div>
      {description ? (
        <p
          className={cn(
            "mt-4 text-sm leading-relaxed",
            isChampagne ? "text-champagne-ink/80" : "text-obsidian-goldLight/85",
          )}
        >
          {description}
        </p>
      ) : null}
      {footer ? <div className="mt-6">{footer}</div> : null}
    </div>
  );
}
