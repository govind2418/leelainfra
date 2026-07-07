"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, BookOpen, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";
import { PRODUCTS } from "@/lib/products";
import { GOOGLE_RATING } from "@/lib/testimonials";
import { WORK_IMAGES } from "@/lib/media";
import { ParticleField } from "@/components/ui/ParticleField";
import { useGsapContext } from "@/hooks/useGsap";

const TITLE_LINES = [
  ["Elevate", "Your"],
  ["Spaces"],
];

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const scope = useGsapContext<HTMLDivElement>((root) => {
    const el = root.current;
    if (!el) return;
    const layers = el.querySelectorAll<HTMLElement>("[data-parallax]");
    const onScroll = () => {
      const y = window.scrollY;
      layers.forEach((layer) => {
        const speed = Number(layer.dataset.parallax ?? 0.2);
        layer.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleCardMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 16);
    rotateX.set(-py * 16);
  }

  function handleCardLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <section ref={scope} className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div data-parallax="0.15" className="absolute inset-0 -z-10">
        <Image
          src={WORK_IMAGES.heroLiving}
          alt="Leela Infra Solution interior — wooden flooring, fluted panel wall and veneer finish"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/70 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/30 to-transparent" />
      </div>

      <ParticleField density={80} />

      <div className="container-luxe relative flex flex-1 flex-col justify-center pt-32 pb-20">
        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.9fr] lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow mb-7 inline-flex items-center gap-3"
            >
              <span className="h-px w-8 bg-gold-500/60" />
              Luxury Interiors & Architectural Excellence in Mumbai
            </motion.span>

            <h1 className="font-display text-[13vw] leading-[0.95] font-medium text-cream sm:text-[9vw] lg:text-[6vw] xl:text-[5.4rem]">
              {TITLE_LINES.map((line, li) => (
                <span key={li} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.15 + li * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {line.map((word, wi) => (
                      <span key={wi} className={li === 1 ? "font-accent text-gradient-gold italic" : undefined}>
                        {word}{" "}
                      </span>
                    ))}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-md text-base leading-relaxed text-cream-dim sm:text-lg"
            >
              Discover the pinnacle of interior design with our premium materials and exquisite
              finishes — wooden flooring, veneers, wall & fluted panels and bath fittings, delivered
              across Mumbai for modern living.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <ButtonLink href="/catalogue">
                  <BookOpen size={16} /> View E-Catalogue
                </ButtonLink>
              </Magnetic>
              <ButtonLink href="/products" variant="ghost">
                Explore Products <ArrowUpRight size={16} />
              </ButtonLink>
            </motion.div>
          </div>

          <motion.div
            ref={cardRef}
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ rotateX: springX, rotateY: springY, transformPerspective: 900 }}
            className="glass-panel-strong relative ml-auto w-full max-w-sm rounded-[2rem] p-7"
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 animate-spin-slow rounded-full border border-dashed border-gold-500/30" />
            <div className="flex items-center gap-1 text-gold-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="font-display mt-4 text-3xl text-cream">
              {GOOGLE_RATING.score}<span className="text-lg text-cream-faint">/5</span>
            </p>
            <p className="mt-1 text-sm text-cream-dim">{GOOGLE_RATING.reviews.toLocaleString()}+ Google reviews</p>
            <div className="hairline my-6" />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-2xl text-cream">450+</p>
                <p className="text-xs text-cream-faint">Projects delivered</p>
              </div>
              <div>
                <p className="font-display text-2xl text-cream">12+</p>
                <p className="text-xs text-cream-faint">Years of craft</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative border-t border-line py-5">
        <Marquee speed="slow">
          {PRODUCTS.map((p) => (
            <span key={p.slug} className="mx-6 flex items-center gap-6 text-sm tracking-[0.2em] text-cream-faint uppercase">
              {p.name}
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500/60" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
