"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { WORK_IMAGES } from "@/lib/media";

const PREVIEWS = [WORK_IMAGES.staircaseFluted, WORK_IMAGES.veneerHeadboard, WORK_IMAGES.veneerBurl];

export function NewArrivals() {
  return (
    <section className="container-luxe py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel-strong grid gap-10 overflow-hidden rounded-[2.5rem] p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:items-center"
      >
        <div>
          <span className="eyebrow mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gold-500/60" />
            New Arrivals
          </span>
          <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl">
            Luxury Interior Panels &amp;{" "}
            <span className="font-accent text-gradient-gold italic">Premium Surface</span> Collection
          </h2>
          <p className="mt-5 max-w-md text-cream-dim">
            Freshly landed fluted profiles, high-realism laminates and book-matched veneers — now
            live across our named catalogue collections.
          </p>
          <Magnetic>
            <ButtonLink href="/catalogue" className="mt-8">
              Browse New Arrivals <ArrowUpRight size={16} />
            </ButtonLink>
          </Magnetic>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {PREVIEWS.map((src) => (
            <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line">
              <Image src={src} alt="New arrival collection preview" fill sizes="15vw" className="object-cover" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
