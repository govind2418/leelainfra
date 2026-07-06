"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import { GALLERY_ITEMS } from "@/lib/gallery";

export function Lightbox({
  index,
  onClose,
  onNavigate,
}: {
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const item = index !== null ? GALLERY_ITEMS[index] : null;

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % GALLERY_ITEMS.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [index, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-6 backdrop-blur-xl"
          onClick={onClose}
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="glass-panel absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full text-cream"
          >
            <X size={18} />
          </button>

          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
            }}
            className="glass-panel absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-cream sm:left-8"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % GALLERY_ITEMS.length);
            }}
            className="glass-panel absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-cream sm:right-8"
          >
            <ChevronRight size={18} />
          </button>

          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-[4/5] w-full max-w-xl overflow-hidden rounded-3xl border border-line-strong sm:aspect-video sm:max-w-3xl"
          >
            <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 90vw, 800px" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-6">
              <p className="eyebrow mb-1">{item.category}</p>
              <p className="font-display text-xl text-cream">{item.title}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
