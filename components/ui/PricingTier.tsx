import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./utils";

export type PricingTierProps = {
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
  name,
  priceLine,
  secondaryLine,
  description,
  highlighted = false,
  className,
  footer,
  ...rest
}: PricingTierProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-[2px] border p-6 transition-shadow",
        highlighted
          ? "border-obsidian-gold bg-obsidian-surface shadow-md ring-1 ring-obsidian-gold-border-medium"
          : "border-[0.5px] border-obsidian-gold-border-subtle bg-obsidian-bg",
        className,
      )}
      {...rest}
    >
      <div className="space-y-1">
        <p className="text-sm font-medium uppercase tracking-wide text-obsidian-gold">{name}</p>
        <p className="text-2xl font-semibold tabular-nums text-obsidian-ivory sm:text-3xl">{priceLine}</p>
        {secondaryLine ? (
          <p className="text-sm tabular-nums text-obsidian-goldLight">{secondaryLine}</p>
        ) : null}
      </div>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-obsidian-text-muted">{description}</p>
      ) : null}
      {footer ? <div className="mt-6">{footer}</div> : null}
    </div>
  );
}
