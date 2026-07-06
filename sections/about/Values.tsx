"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { VALUES } from "@/lib/constants";

export function Values() {
  return (
    <section className="container-luxe py-28">
      <SectionHeading eyebrow="Core Values" title="What guides every specification we make." className="mb-14" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((value, i) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="h-full">
              <span className="font-display text-4xl text-gold-500/40">0{i + 1}</span>
              <h3 className="font-display mt-4 text-xl text-cream">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-dim">{value.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
