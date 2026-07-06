"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.documentElement.style.overflow = "";
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink"
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 } }}
        >
          <motion.div
            className="absolute inset-x-0 bottom-0 h-full origin-bottom bg-ink"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1.1, ease: [0.83, 0, 0.17, 1], delay: 0.35 }}
            style={{ transformOrigin: "top" }}
          />
          <div className="relative flex flex-col items-center gap-4">
            <motion.span
              className="font-display text-3xl tracking-[0.2em] text-gold-300 sm:text-4xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              LEELA INFRA
            </motion.span>
            <motion.div
              className="h-px w-40 overflow-hidden bg-line-strong"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-gold-400 to-gold-600"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.1, ease: [0.83, 0, 0.17, 1], delay: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
