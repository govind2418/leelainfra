"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Download } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { GlassCard } from "@/components/ui/GlassCard";
import { CATALOGUE_CATEGORIES, CATALOGUE_ITEMS, getCataloguesByCategory } from "@/lib/catalogues";
import { CONTACT } from "@/lib/constants";

export function CatalogueDownload() {
  return (
    <section className="container-luxe py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <GlassCard strong hover={false} className="mb-20 flex flex-col items-center gap-6 text-center sm:p-14">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-400">
            <BookOpen size={28} />
          </span>
          <div>
            <h2 className="font-display text-3xl text-cream sm:text-4xl">The Complete Leela Infra Catalogue</h2>
            <p className="mx-auto mt-3 max-w-lg text-cream-dim">
              {CATALOGUE_ITEMS.length} named collections across veneers, fluted panels, hardware
              and bath fittings. Tap any cover below to open its own page, or request the full set
              on WhatsApp.
            </p>
          </div>
          <Magnetic>
            <ButtonLink
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Leela Infra, could you share the complete e-catalogue?")}`}
            >
              Request Full Catalogue <Download size={16} />
            </ButtonLink>
          </Magnetic>
        </GlassCard>
      </motion.div>

      <div className="space-y-20">
        {CATALOGUE_CATEGORIES.map((category) => (
          <div key={category}>
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow mb-2">{category}</p>
                <h3 className="font-display text-2xl text-cream sm:text-3xl">
                  {getCataloguesByCategory(category).length} named collections
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
              {getCataloguesByCategory(category).map((item, i) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.45, delay: (i % 10) * 0.04 }}
                >
                  <Link href={`/catalogue/${item.slug}`} data-cursor="hover" className="group block">
                    <div className="relative aspect-[5/7] overflow-hidden rounded-2xl bg-ink-2 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_28px_55px_-18px_rgba(211,171,95,0.35)]">
                      <Image
                        src={item.image}
                        alt={`${item.name} catalogue cover`}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                        <span className="flex items-center gap-1.5 p-3 text-xs font-medium text-gold-200">
                          View Catalogue <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm font-medium text-cream">{item.name}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
