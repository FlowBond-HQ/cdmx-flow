import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./utils";

export type CardTheme = "champagne" | "obsidian";

const surface: Record<CardTheme, string> = {
  champagne:
    "border border-champagne-border bg-champagne-surface text-champagne-ink shadow-sm",
  obsidian:
    "border border-obsidian-border bg-obsidian-surface text-obsidian-ivory shadow-sm",
};

export type CardProps = {
  theme?: CardTheme;
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function Card({
  theme = "champagne",
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-6 transition-shadow focus-within:ring-2 focus-within:ring-offset-2",
        theme === "champagne"
          ? "focus-within:ring-champagne-gold focus-within:ring-offset-champagne-bg"
          : "focus-within:ring-obsidian-gold focus-within:ring-offset-obsidian-bg",
        surface[theme],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
