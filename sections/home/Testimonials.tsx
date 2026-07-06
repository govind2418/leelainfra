"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { GOOGLE_RATING, TESTIMONIALS } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="container-luxe">
        <div className="mb-14 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <SectionHeading
            eyebrow="Client Voices"
            title="Hear from our satisfied clients."
            description="Over 1,400 positive reviews and testimonials from satisfied clients."
          />
          <div className="glass-panel flex shrink-0 items-center gap-4 rounded-2xl px-6 py-4">
            <div className="flex items-center gap-1 text-gold-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <div>
              <p className="font-display text-lg text-cream">{GOOGLE_RATING.score} / 5</p>
              <p className="text-xs text-cream-dim">{GOOGLE_RATING.reviews.toLocaleString()}+ Google reviews</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="h-full" hover={false}>
                <Quote className="mb-4 text-gold-500/50" size={28} />
                <p className="font-accent text-lg leading-relaxed text-cream italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="hairline my-6" />
                <p className="text-sm font-semibold text-cream">{t.name}</p>
                <p className="text-xs text-cream-dim">{t.role}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
