"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTORS } from "@/lib/sectors";

export function Sectors() {
  return (
    <section className="container-luxe py-28">
      <SectionHeading
        eyebrow="Work Division"
        title="Trusted across every sector."
        description="From private villas to airports — our materials are specified wherever a space needs to perform as well as it looks."
        align="center"
        className="mx-auto mb-14"
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {SECTORS.map((sector, i) => (
          <motion.div
            key={sector.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: (i % 5) * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            <div data-cursor="hover" className="group relative aspect-square overflow-hidden rounded-2xl border border-line">
              <Image
                src={sector.image}
                alt={`Leela Infra Solution — ${sector.name} projects`}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <p className="font-display absolute bottom-3 left-4 text-base text-cream sm:text-lg">{sector.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
