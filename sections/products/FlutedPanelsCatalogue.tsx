"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FLUTED_PANELS_CATALOGUE } from "@/lib/flutedPanelsCatalogue";

export function FlutedPanelsCatalogue() {
  const [index, setIndex] = useState<number | null>(null);
  const total = FLUTED_PANELS_CATALOGUE.length;

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % total));
      if (e.key === "ArrowLeft") setIndex((i) => (i === null ? i : (i - 1 + total) % total));
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [index, total]);

  const active = index !== null ? FLUTED_PANELS_CATALOGUE[index] : null;

  return (
    <section className="container-luxe py-28">
      <SectionHeading
        eyebrow="Fluted Panels Catalogue"
        title="Every design, page by page."
        description="Our full fluted panels e-catalogue — open any page full-screen and browse the complete collection, just like flipping through the PDF."
        className="mb-14"
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {FLUTED_PANELS_CATALOGUE.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            data-cursor="hover"
            onClick={() => setIndex(i)}
            className="group relative aspect-[5/7] overflow-hidden rounded-2xl border border-line bg-ink-2 text-left shadow-[0_20px_45px_-20px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:-translate-y-1"
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/10 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="flex items-center gap-1.5 text-xs font-medium text-gold-200">
                <Maximize2 size={12} /> View
              </span>
            </div>
            <span className="absolute top-2 left-2 rounded-full bg-ink/70 px-2 py-0.5 text-[10px] tracking-wide text-cream-dim backdrop-blur-sm">
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-6 backdrop-blur-xl"
            onClick={() => setIndex(null)}
          >
            <button
              aria-label="Close"
              onClick={() => setIndex(null)}
              className="glass-panel absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full text-cream"
            >
              <X size={18} />
            </button>

            <button
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((index - 1 + total) % total);
              }}
              className="glass-panel absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-cream sm:left-8"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((index + 1) % total);
              }}
              className="glass-panel absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-cream sm:right-8"
            >
              <ChevronRight size={18} />
            </button>

            <motion.div
              key={active.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[5/7] h-[82vh] max-h-[82vh] w-auto overflow-hidden rounded-2xl border border-line-strong shadow-[0_40px_100px_-20px_rgba(0,0,0,0.85)]"
            >
              <Image
                src={active.src}
                alt={active.title}
                fill
                sizes="90vw"
                className="object-contain bg-cream"
                priority
              />
            </motion.div>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-wide text-cream-dim">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} — {active.title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
