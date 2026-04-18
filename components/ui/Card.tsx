import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./utils";

const surface =
  "border-[0.5px] border-obsidian-gold-border-subtle bg-obsidian-surface text-obsidian-ivory shadow-sm";

export type CardProps = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function Card({ className, children, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[2px] p-6 transition-shadow focus-within:ring-2 focus-within:ring-obsidian-gold focus-within:ring-offset-2 focus-within:ring-offset-obsidian-bg",
        surface,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
