"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { GALLERY_ITEMS } from "@/lib/gallery";

export function GalleryTeaser() {
  const items = GALLERY_ITEMS.slice(0, 6);

  return (
    <section className="container-luxe py-28">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="Our Work" title="Showcasing our successful projects." />
        <ButtonLink href="/gallery" variant="ghost" className="shrink-0">
          Full Gallery <ArrowUpRight size={16} />
        </ButtonLink>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={item.tall ? "row-span-2" : ""}
          >
            <div data-cursor="hover" className="group relative aspect-square overflow-hidden rounded-2xl border border-line">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-xs font-medium text-cream">{item.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
