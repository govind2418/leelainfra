"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRODUCTS } from "@/lib/products";

const SPANS = [
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
];

export function Expertise() {
  return (
    <section className="container-luxe py-28">
      <SectionHeading
        eyebrow="Our Expertise"
        title="Explore our premium product offerings."
        description="From Veneer & FRD Laminates to Elegant Bath Fittings — every category we carry is vetted for finish consistency, structural performance and long-term serviceability."
        className="mb-14"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={SPANS[i]}
          >
            <Link
              href={`/products/${product.slug}`}
              data-cursor="hover"
              className="group relative block h-full min-h-[15rem] overflow-hidden rounded-3xl border border-line"
            >
              <MediaFrame
                image={product.image}
                art={product.art}
                seed={i + 1}
                alt={product.name}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent transition-opacity group-hover:opacity-90" />

              <div className="relative z-10 flex h-full flex-col justify-end p-7">
                <span className="eyebrow mb-2 text-gold-300/80">0{i + 1}</span>
                <h3 className="font-display flex items-center gap-2 text-2xl text-cream">
                  {product.name}
                  <ArrowUpRight size={18} className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </h3>
                <p className="mt-2 max-w-xs text-sm text-cream-dim opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {product.short}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
