"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ButtonLink } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

function videoMimeType(src: string) {
  if (src.endsWith(".webm")) return "video/webm";
  return "video/mp4";
}

export function ProductDetailHero({ product }: { product: Product }) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden pt-40 pb-16",
        product.video ? "min-h-[88vh]" : "min-h-[70vh]"
      )}
    >
      {product.video ? (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={product.image}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={product.video} type={videoMimeType(product.video)} />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
          <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,transparent_35%,rgba(8,7,10,0.85)_100%)]" />
          <span className="eyebrow absolute top-28 right-6 z-10 hidden items-center gap-2 rounded-full border border-gold-500/30 bg-ink/50 px-3 py-1.5 backdrop-blur-sm sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" />
            {product.name} in Motion
          </span>
        </>
      ) : (
        <>
          <MediaFrame image={product.image} art={product.art} seed={3} alt={product.name} priority sizes="100vw" className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
        </>
      )}

      <div className="container-luxe relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 flex items-center gap-2 text-xs text-cream-faint"
        >
          <Link href="/" className="hover:text-gold-300">Home</Link>
          <ChevronRight size={12} />
          <Link href="/products" className="hover:text-gold-300">Products</Link>
          <ChevronRight size={12} />
          <span className="text-cream-dim">{product.name}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display max-w-3xl text-5xl leading-[1.03] font-medium text-cream sm:text-6xl lg:text-7xl"
        >
          {product.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-cream-dim sm:text-lg"
        >
          {product.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <ButtonLink href="/contact">
              Enquire About {product.name} <ArrowUpRight size={16} />
            </ButtonLink>
          </Magnetic>
          <ButtonLink href="/catalogue" variant="ghost">Download Catalogue</ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
