"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { GALLERY_ITEMS } from "@/lib/gallery";
import { Lightbox } from "./Lightbox";

export function GalleryMasonry() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="container-luxe py-24">
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {GALLERY_ITEMS.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setActive(i)}
            data-cursor="hover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-line text-left"
            style={{ breakInside: "avoid" }}
          >
            <div className={"relative " + (item.tall ? "aspect-[3/4]" : "aspect-square")}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/10 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <Expand size={16} className="mb-2 text-gold-300" />
              <p className="text-xs tracking-wide text-gold-300 uppercase">{item.category}</p>
              <p className="font-display text-base text-cream">{item.title}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox index={active} onClose={() => setActive(null)} onNavigate={setActive} />
    </section>
  );
}
