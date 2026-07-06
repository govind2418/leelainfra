"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WORK_IMAGES } from "@/lib/media";

export function Story() {
  return (
    <section className="container-luxe py-28">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="eyebrow mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gold-500/60" />
            Our Story
          </span>
          <h1 className="font-display text-4xl leading-[1.1] font-medium text-cream sm:text-5xl">
            From a single showroom to a{" "}
            <span className="font-accent text-gradient-gold italic">material authority.</span>
          </h1>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-cream-dim">
            <p>
              Leela Infra Solution began as a small material supply desk in Mira Road, built on a
              simple conviction: interiors deserve the same rigour as architecture itself. What
              started with a handful of flooring and veneer lines has grown into a full
              architectural-products house.
            </p>
            <p>
              Today, under the leadership of Founder &amp; CEO Askaran Sharma, we work directly
              with architects, contractors and homeowners to specify, supply and install premium
              surfaces — wooden flooring, wall &amp; fluted panels, veneers, laminates, hardware
              and bath fittings — across residential, hospitality and commercial projects.
            </p>
            <p>
              We still operate the way we did on day one: sample everything, promise only what we
              can deliver, and stand behind every finish long after installation.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-square overflow-hidden rounded-[2rem] border border-line lg:aspect-[4/5]"
        >
          <Image
            src={WORK_IMAGES.barFluted}
            alt="Leela Infra Solution fluted panel installation"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <span className="eyebrow absolute bottom-4 left-5 z-10 text-gold-200/80">Founded · Mira Road</span>
        </motion.div>
      </div>
    </section>
  );
}
