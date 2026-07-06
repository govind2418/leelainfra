"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { VALUES } from "@/lib/constants";
import { WORK_IMAGES } from "@/lib/media";

export function AboutTeaser() {
  return (
    <section className="container-luxe py-28">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line"
          >
            <Image
              src={WORK_IMAGES.veneerHeadboard}
              alt="Book-matched veneer wall panelling by Leela Infra Solution"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel-strong absolute -bottom-8 -right-6 w-56 rounded-2xl p-5 sm:-right-10"
          >
            <p className="font-display text-3xl text-cream">12+</p>
            <p className="mt-1 text-xs text-cream-dim">Years delivering architectural interiors across Mumbai &amp; beyond</p>
          </motion.div>
        </div>

        <div>
          <span className="eyebrow mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gold-500/60" />
            About Leela Infra
          </span>
          <h2 className="font-display text-4xl leading-[1.1] font-medium text-cream sm:text-5xl">
            Leela Infra Solution:{" "}
            <span className="font-accent text-gradient-gold italic">Redefining</span> Interiors.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream-dim">
            Leela Infra Solution specializes in providing high-end interior materials and
            architectural products that transform spaces into luxurious environments. With a
            commitment to quality and innovation, we deliver products that embody elegance and
            sophistication for residential and commercial projects.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {VALUES.map((value) => (
              <Reveal key={value.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                  <Check size={13} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-cream">{value.title}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ButtonLink href="/about" variant="ghost">
              Our Story <ArrowUpRight size={16} />
            </ButtonLink>
            <p className="text-xs text-cream-faint">
              <span className="text-cream-dim">Askaran Sharma</span> · Founder &amp; CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
