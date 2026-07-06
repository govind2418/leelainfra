"use client";

import Link from "next/link";
import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-transform duration-300 will-change-transform active:scale-[0.97]";

const variants = {
  primary: cn(
    base,
    "bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-ink shadow-[0_8px_30px_-8px_rgba(195,154,76,0.6)] hover:shadow-[0_10px_40px_-6px_rgba(211,171,95,0.75)]"
  ),
  ghost: cn(
    base,
    "glass-panel text-cream hover:border-gold-400/50 border border-line"
  ),
  outline: cn(
    base,
    "border border-gold-500/40 text-gold-200 hover:bg-gold-500/10"
  ),
};

type Variant = keyof typeof variants;

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export const Button = forwardRef<
  HTMLButtonElement,
  CommonProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ variant = "primary", className, children, ...props }, ref) => (
  <button ref={ref} className={cn(variants[variant], className)} {...props}>
    <span className="relative z-10 flex items-center gap-2.5">{children}</span>
  </button>
));
Button.displayName = "Button";

export const ButtonLink = forwardRef<
  HTMLAnchorElement,
  CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
>(({ variant = "primary", className, children, href, ...props }, ref) => (
  <Link ref={ref} href={href} className={cn(variants[variant], className)} {...props}>
    <span className="relative z-10 flex items-center gap-2.5">{children}</span>
  </Link>
));
ButtonLink.displayName = "ButtonLink";
