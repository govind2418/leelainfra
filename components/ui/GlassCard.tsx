"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function GlassCard({
  children,
  className,
  strong = false,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  strong?: boolean;
  hover?: boolean;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } } : undefined}
      className={cn(
        "rounded-3xl p-7",
        strong ? "glass-panel-strong" : "glass-panel",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
