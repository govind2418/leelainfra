"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { PRODUCTS } from "@/lib/products";

export function ProductsGrid() {
  return (
    <section className="container-luxe py-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={`/products/${product.slug}`} data-cursor="hover" className="group block h-full">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-line">
                <MediaFrame
                  image={product.image}
                  art={product.art}
                  seed={i + 1}
                  alt={product.name}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <span className="eyebrow absolute top-5 left-5">0{i + 1}</span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl text-cream">{product.name}</h3>
                  <p className="mt-1.5 max-w-xs text-sm text-cream-dim">{product.short}</p>
                </div>
                <ArrowUpRight size={20} className="mt-1 shrink-0 text-gold-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
