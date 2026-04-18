import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "./utils";

export type ButtonVariant = "primary" | "secondary" | "outline";

const baseClasses =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[2px] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.08em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-obsidian-gold text-black hover:bg-obsidian-goldLight hover:text-black focus-visible:outline-obsidian-gold",
  secondary:
    "border border-obsidian-ivory bg-transparent text-obsidian-ivory hover:bg-obsidian-surface focus-visible:outline-obsidian-ivory",
  outline:
    "border border-obsidian-gold bg-transparent text-obsidian-gold hover:bg-obsidian-surface focus-visible:outline-obsidian-gold",
};

export type ButtonProps = {
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
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  const styles = cn(baseClasses, variantClasses[variant], className);

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchorProps } = rest;
    return (
      <Link href={href} className={styles} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  const { type = "button", ...attrs } = buttonProps;
  return (
    <button type={type} className={styles} {...attrs}>
      {children}
    </button>
  );
}
