"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { PROCESS } from "@/lib/constants";

export function Process() {
  return (
    <section className="container-luxe py-28">
      <SectionHeading eyebrow="How We Work" title="A process refined over 450+ projects." align="center" className="mx-auto mb-16" />

      <div className="grid gap-10 lg:grid-cols-3">
        {PROCESS.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <span className="font-display text-gradient-gold text-6xl">{step.step}</span>
            <h3 className="font-display mt-4 text-2xl text-cream">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream-dim">{step.description}</p>
            <GoldDivider className="mt-8 lg:hidden" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
