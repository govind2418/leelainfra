"use client";

import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  threshold = 0.2,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  threshold?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(threshold);

  return (
    <Tag
      ref={ref}
      data-reveal
      data-visible={visible}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
