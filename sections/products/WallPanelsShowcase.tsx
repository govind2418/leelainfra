"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WALL_PANELS_SHOWCASE } from "@/lib/wallPanelsShowcase";

export function WallPanelsShowcase() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="container-luxe py-24">
      <SectionHeading
        eyebrow="Wall Panels Gallery"
        title="Seen in real interiors."
        description="From sculptural solid-wood slats to louvered feature walls — a closer look at our wall panels styled across living rooms and lounges."
        className="mb-14"
      />

      <div className="grid gap-5 sm:grid-cols-3">
        {WALL_PANELS_SHOWCASE.map((item, i) => (
          <motion.button
            key={item.image}
            onClick={() => setActive(i)}
            data-cursor="hover"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative block aspect-[2/3] overflow-hidden rounded-3xl border border-line text-left"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
            <Expand size={16} className="absolute top-5 right-5 text-gold-300 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="eyebrow mb-1 text-gold-300/90">{item.setting}</p>
              <p className="font-display text-xl text-cream">{item.title}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-6 backdrop-blur-xl"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="glass-panel absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full text-cream"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[2/3] w-full max-w-md overflow-hidden rounded-3xl border border-line-strong sm:aspect-video sm:max-w-3xl"
            >
              <Image
                src={WALL_PANELS_SHOWCASE[active].image}
                alt={WALL_PANELS_SHOWCASE[active].title}
                fill
                sizes="800px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-6">
                <p className="eyebrow mb-1">{WALL_PANELS_SHOWCASE[active].setting}</p>
                <p className="font-display text-xl text-cream">{WALL_PANELS_SHOWCASE[active].title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
