"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ButtonLink } from "@/components/ui/Button";
import { COLLECTIONS } from "@/lib/collections";

export function BrandsGrid() {
  return (
    <section className="container-luxe py-24">
      <div className="grid gap-6 lg:grid-cols-2">
        {COLLECTIONS.map((collection, i) => (
          <motion.div
            key={collection.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group glass-panel relative overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <MediaFrame
                image={collection.image}
                art={collection.art}
                seed={i + 3}
                alt={collection.name}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <span className="eyebrow absolute top-5 left-5 rounded-full bg-ink/50 px-3 py-1 backdrop-blur-sm">
                {collection.pieces} pieces
              </span>
            </div>
            <div className="p-7">
              <p className="text-xs tracking-[0.2em] text-gold-400 uppercase">{collection.category}</p>
              <h3 className="font-display mt-2 text-3xl text-cream">{collection.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-dim">{collection.description}</p>
              <ButtonLink href="/products" variant="ghost" className="mt-6 px-5 py-2.5 text-xs">
                View Materials <ArrowUpRight size={14} />
              </ButtonLink>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
