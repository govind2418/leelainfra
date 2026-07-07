"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TouchHereArrow({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn("pointer-events-none absolute select-none", className)}
    >
      <motion.div
        animate={{ y: [0, 6, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <span className="font-accent eyebrow whitespace-nowrap text-gold-300">Touch Here</span>
        <svg
          width="46"
          height="54"
          viewBox="0 0 46 54"
          fill="none"
          className="mt-1 text-gold-300"
        >
          <path
            d="M6 4C4 18 8 34 24 40"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 5"
          />
          <path
            d="M15 36 L24 40 L21 30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
