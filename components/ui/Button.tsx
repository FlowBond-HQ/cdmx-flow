import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "./utils";

export type ButtonTheme = "champagne" | "obsidian";
export type ButtonVariant = "primary" | "secondary" | "outline";

const baseClasses =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const themeVariantClasses: Record<
  ButtonTheme,
  Record<ButtonVariant, string>
> = {
  champagne: {
    primary:
      "bg-champagne-gold text-champagne-ink hover:bg-champagne-goldDark hover:text-champagne-bg focus-visible:outline-champagne-goldDark",
    secondary:
      "bg-champagne-surface text-champagne-ink border border-champagne-border hover:bg-champagne-border/80 focus-visible:outline-champagne-gold",
    outline:
      "border border-champagne-goldDark bg-transparent text-champagne-goldDark hover:bg-champagne-surface focus-visible:outline-champagne-goldDark",
  },
  obsidian: {
    primary:
      "bg-obsidian-gold text-obsidian-bg hover:bg-obsidian-goldLight hover:text-obsidian-bg focus-visible:outline-obsidian-goldLight",
    secondary:
      "bg-obsidian-surface text-obsidian-ivory border border-obsidian-border hover:bg-obsidian-border/40 focus-visible:outline-obsidian-gold",
    outline:
      "border border-obsidian-gold bg-transparent text-obsidian-gold hover:bg-obsidian-surface focus-visible:outline-obsidian-gold",
  },
};

export type ButtonProps = {
  theme?: ButtonTheme;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & (
  | ({
      href: string;
    } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">)
  | ({
      href?: undefined;
    } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">)
);

export function Button({
  theme = "champagne",
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  const styles = cn(
    baseClasses,
    themeVariantClasses[theme][variant],
    className,
  );

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchorProps } = rest;
    return (
      <Link
        href={href}
        className={styles}
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={styles} {...buttonProps}>
      {children}
    </button>
  );
}
