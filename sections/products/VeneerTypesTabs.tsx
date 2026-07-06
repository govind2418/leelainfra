"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ORDERED_VENEER_TYPES } from "@/lib/veneerTypes";

export function VeneerTypesTabs() {
  return (
    <section className="container-luxe py-24">
      <SectionHeading
        eyebrow="Types of Veneers"
        title="Eight ways to bring wood grain to a wall."
        description="Every veneer we carry is engineered around one of eight core types — each with its own character, process and specification. Tap any type to explore it in full."
        className="mb-14"
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {ORDERED_VENEER_TYPES.map((type, i) => (
          <motion.div
            key={type.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/products/veneers/${type.slug}`}
              data-cursor="hover"
              className="group glass-panel-strong relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-gold-500/25 px-4 py-6 text-center transition-all duration-300 hover:border-gold-400/60 hover:shadow-[0_12px_40px_-12px_rgba(211,171,95,0.45)]"
            >
              <span className="eyebrow absolute top-3 left-3 text-gold-400/70">0{i + 1}</span>
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-gold-500/40">
                <Image
                  src={type.images[0]}
                  alt={`${type.name} veneer`}
                  fill
                  sizes="64px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="font-display text-lg text-cream">{type.name}</p>
              <span className="flex items-center gap-1 text-xs text-gold-300/80 opacity-0 transition-opacity group-hover:opacity-100">
                Explore <ArrowUpRight size={12} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
