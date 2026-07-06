"use client";

import { motion } from "framer-motion";
import { Gem, Hammer, Lightbulb, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const PILLARS = [
  {
    icon: Gem,
    title: "Premium Materials",
    description: "We source only the finest materials to ensure your interiors shine with luxury and durability.",
  },
  {
    icon: Hammer,
    title: "Expert Craftsmanship",
    description: "Our products are crafted by skilled artisans, merging functionality and design for stunning results.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Designs",
    description: "We offer cutting-edge designs that seamlessly blend modern aesthetics with timeless elegance.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Your satisfaction is our priority; we customize our services to meet your unique needs and preferences.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Unmatched quality and innovative solutions."
          align="center"
          className="mx-auto mb-16"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="h-full">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-400">
                  <pillar.icon size={22} />
                </span>
                <h3 className="font-display text-xl text-cream">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-dim">{pillar.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
