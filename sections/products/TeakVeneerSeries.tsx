"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TEAK_VENEER_SHEETS } from "@/lib/veneerGallery";

export function TeakVeneerSeries() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="container-luxe py-24">
      <SectionHeading
        eyebrow="Teak Veneers Series"
        title="Every sheet, book-matched and graded by hand."
        description="A sample of real sheets from our teak veneer series — each one graded, coded and cut to order. Tap any sheet for a closer look."
        className="mb-14"
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {TEAK_VENEER_SHEETS.map((sheet, i) => (
          <motion.button
            key={sheet.image}
            onClick={() => setActive(i)}
            data-cursor="hover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-line text-left"
          >
            <Image
              src={sheet.image}
              alt={`Teak veneer sheet — ${sheet.code}`}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
              <Expand size={14} className="mb-1 text-gold-300" />
              <p className="text-xs font-medium text-cream">{sheet.code}</p>
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
              className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border border-line-strong"
            >
              <Image
                src={TEAK_VENEER_SHEETS[active].image}
                alt={`Teak veneer sheet — ${TEAK_VENEER_SHEETS[active].code}`}
                fill
                sizes="500px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-6">
                <p className="eyebrow mb-1">Teak Veneers Series</p>
                <p className="font-display text-xl text-cream">{TEAK_VENEER_SHEETS[active].code}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
