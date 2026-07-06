"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ChevronRight, Download, ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { CONTACT } from "@/lib/constants";
import type { CatalogueItem } from "@/lib/catalogues";
import { getCataloguesByCategory } from "@/lib/catalogues";

export function CatalogueDetail({ item }: { item: CatalogueItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(-py * 14);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const related = getCataloguesByCategory(item.category).filter((c) => c.slug !== item.slug).slice(0, 5);
  const whatsappLink = `${CONTACT.whatsapp}?text=${encodeURIComponent(`Hi Leela Infra, could you share the ${item.name} e-catalogue?`)}`;

  return (
    <>
      <section className="container-luxe pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-2 text-xs text-cream-faint"
        >
          <Link href="/" className="hover:text-gold-300">Home</Link>
          <ChevronRight size={12} />
          <Link href="/catalogue" className="hover:text-gold-300">Catalogue</Link>
          <ChevronRight size={12} />
          <span className="text-cream-dim">{item.name}</span>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ rotateX: springX, rotateY: springY, transformPerspective: 1200 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative aspect-[5/7] overflow-hidden rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
              <Image
                src={item.image}
                alt={`${item.name} catalogue cover`}
                fill
                sizes="(max-width: 1024px) 80vw, 400px"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 h-8 w-4/5 -translate-x-1/2 rounded-full bg-black/50 blur-2xl" />
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="eyebrow mb-4 inline-flex items-center gap-3"
            >
              <span className="h-px w-8 bg-gold-500/60" />
              {item.category}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl leading-[1.05] font-medium text-cream sm:text-5xl"
            >
              {item.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-cream-dim"
            >
              Part of our {item.category} range — the full specification sheet, finish options
              and technical details are laid out in the digital flip-book. Open it instantly or
              request a copy on WhatsApp.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <ButtonLink href={item.pdf} target="_blank" rel="noopener noreferrer">
                  View / Download PDF <ExternalLink size={16} />
                </ButtonLink>
              </Magnetic>
              <ButtonLink href={whatsappLink} variant="ghost" target="_blank" rel="noopener noreferrer">
                Request on WhatsApp <Download size={16} />
              </ButtonLink>
            </motion.div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-luxe pb-28">
          <p className="eyebrow mb-8">More from {item.category}</p>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {related.map((rel) => (
              <Link key={rel.slug} href={`/catalogue/${rel.slug}`} data-cursor="hover" className="group block">
                <div className="relative aspect-[5/7] overflow-hidden rounded-2xl bg-ink-2 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:-translate-y-2">
                  <Image
                    src={rel.image}
                    alt={`${rel.name} catalogue cover`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex items-center gap-1.5 p-3 text-xs font-medium text-gold-200">
                      View <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm font-medium text-cream">{rel.name}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
