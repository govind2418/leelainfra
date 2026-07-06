"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { getFinishImage } from "@/lib/finishImages";
import type { Product } from "@/lib/products";

export function ProductFeatures({ product }: { product: Product }) {
  return (
    <section className="container-luxe py-24">
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="h-full" hover={false}>
            <p className="eyebrow mb-6">Highlights</p>
            <ul className="space-y-4">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                    <Check size={13} />
                  </span>
                  <span className="text-sm leading-relaxed text-cream-dim">{h}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GlassCard className="h-full" hover={false}>
            <p className="eyebrow mb-6">Specifications</p>
            <dl className="space-y-4">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between border-b border-line pb-3 last:border-0">
                  <dt className="text-sm text-cream-dim">{spec.label}</dt>
                  <dd className="text-sm font-medium text-cream">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </GlassCard>
        </motion.div>
      </div>

      {product.slug !== "veneers" && product.slug !== "wooden-flooring" && (
        <div className="mt-16">
          <p className="eyebrow mb-6">Available Finishes</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {product.finishes.map((finish, i) => (
              <motion.div
                key={finish}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-line">
                  <MediaFrame
                    image={getFinishImage(product.slug, finish)}
                    art={product.art}
                    seed={i + 20}
                    alt={finish}
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 18vw"
                    className="h-full w-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-cream">{finish}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
