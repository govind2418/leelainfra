"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <motion.a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-ink shadow-[0_10px_40px_-8px_rgba(211,171,95,0.7)] sm:bottom-8 sm:right-8"
    >
      <MessageCircle size={24} strokeWidth={2} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-gold-500/40" />
    </motion.a>
  );
}
