"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight, Expand, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { ORDERED_VENEER_TYPES, type VeneerType } from "@/lib/veneerTypes";

export function VeneerTypeDetail({ type }: { type: VeneerType }) {
  const [active, setActive] = useState<number | null>(null);
  const others = ORDERED_VENEER_TYPES.filter((t) => t.slug !== type.slug);

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/4 h-[30rem] w-[30rem] rounded-full bg-gold-600/10 blur-[140px]" />
          <div className="absolute top-1/2 -right-40 h-[26rem] w-[26rem] rounded-full bg-gold-400/[0.06] blur-[150px]" />
        </div>

        <div className="container-luxe relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-2 text-xs text-cream-faint"
          >
            <Link href="/" className="hover:text-gold-300">Home</Link>
            <ChevronRight size={12} />
            <Link href="/products" className="hover:text-gold-300">Products</Link>
            <ChevronRight size={12} />
            <Link href="/products/veneers" className="hover:text-gold-300">Veneers</Link>
            <ChevronRight size={12} />
            <span className="text-cream-dim">{type.name}</span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow mb-4 inline-flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gold-500/60" />
            {type.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display max-w-2xl text-5xl leading-[1.03] font-medium text-cream sm:text-6xl lg:text-7xl"
          >
            {type.name} Veneers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream-dim sm:text-lg"
          >
            {type.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <ButtonLink href="/contact">
                Enquire About {type.name} Veneers <ArrowUpRight size={16} />
              </ButtonLink>
            </Magnetic>
            <ButtonLink href="/catalogue" variant="ghost">Download Catalogue</ButtonLink>
          </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] bg-gradient-to-br from-cream/[0.07] to-cream/[0.02] p-6"
          >
            <Image
              src={type.heroImage}
              alt={`${type.name} veneer artwork`}
              fill
              sizes="(max-width: 1024px) 90vw, 450px"
              className="object-contain p-4"
              priority
            />
          </motion.div>
        </div>
      </section>

      <section className="container-luxe py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <GlassCard hover={false} className="h-full">
              <p className="eyebrow mb-4">The Process</p>
              <p className="text-sm leading-relaxed text-cream-dim">{type.process}</p>
              <div className="hairline my-6" />
              <p className="eyebrow mb-4">Best Suited For</p>
              <p className="text-sm leading-relaxed text-cream-dim">{type.applications}</p>
            </GlassCard>
          </Reveal>

          <Reveal delay={100}>
            <GlassCard hover={false} className="h-full">
              <p className="eyebrow mb-6">Specifications</p>
              <dl className="space-y-4">
                {type.specs.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between border-b border-line pb-3 last:border-0">
                    <dt className="text-sm text-cream-dim">{spec.label}</dt>
                    <dd className="text-sm font-medium text-cream">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <section className="container-luxe pb-24">
        <p className="eyebrow mb-8">Available Varieties</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {type.images.map((img, i) => (
            <motion.button
              key={img}
              onClick={() => setActive(i)}
              data-cursor="hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.45, delay: (i % 10) * 0.05 }}
              className="group relative block aspect-[3/4] overflow-hidden rounded-2xl border border-line text-left"
            >
              <Image
                src={img}
                alt={`${type.name} veneer — ${type.varieties[i] ?? type.name}`}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <Expand size={14} className="mb-1 text-gold-300" />
                <p className="text-xs font-medium text-cream">{type.varieties[i] ?? type.name}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-6 backdrop-blur-xl"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="glass-panel absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full text-cream"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border border-line-strong"
            >
              <Image
                src={type.images[active]}
                alt={`${type.name} veneer — ${type.varieties[active] ?? type.name}`}
                fill
                sizes="500px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-6">
                <p className="eyebrow mb-1">{type.name} Veneers</p>
                <p className="font-display text-xl text-cream">{type.varieties[active] ?? type.name}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="container-luxe pb-28">
        <p className="eyebrow mb-8">Other Veneer Types</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {others.map((t) => (
            <Link
              key={t.slug}
              href={`/products/veneers/${t.slug}`}
              data-cursor="hover"
              className="glass-panel flex flex-col items-center gap-2 rounded-2xl px-3 py-4 text-center transition-colors hover:border-gold-400/50"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gold-500/30">
                <Image src={t.images[0]} alt={t.name} fill sizes="48px" className="object-cover" />
              </div>
              <p className="text-xs font-medium text-cream">{t.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
