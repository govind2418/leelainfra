"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ArtPlate, type ArtVariant } from "@/components/ui/ArtPlate";

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
  art = "fluted",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumb: string;
  art?: ArtVariant;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pt-40 pb-16">
      <ArtPlate variant={art} seed={5} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />

      <div className="container-luxe relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 flex items-center gap-2 text-xs text-cream-faint"
        >
          <Link href="/" className="hover:text-gold-300">Home</Link>
          <ChevronRight size={12} />
          <span className="text-cream-dim">{crumb}</span>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-4 inline-flex items-center gap-3"
        >
          <span className="h-px w-8 bg-gold-500/60" />
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display max-w-4xl text-5xl leading-[1.03] font-medium text-cream sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream-dim sm:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
