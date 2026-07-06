"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/lib/projects";

const FILTERS = ["All", "Wooden Flooring", "Fluted Panels", "Wall Panels", "Veneers", "Laminates", "Bath Fittings"];

export function ProjectsGrid() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.scope.includes(filter))),
    [filter]
  );

  return (
    <section className="container-luxe py-24">
      <div className="mb-12 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            data-cursor="hover"
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-colors",
              filter === f
                ? "border-gold-500 bg-gold-500/15 text-gold-200"
                : "border-line text-cream-dim hover:border-gold-500/40 hover:text-cream"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <motion.div
            layout
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={`/projects/${project.slug}`} data-cursor="hover" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
                <MediaFrame
                  image={project.image}
                  art={project.art}
                  seed={i + 4}
                  alt={project.title}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <span className="eyebrow absolute top-5 left-5 rounded-full bg-ink/60 px-3 py-1 backdrop-blur-sm">{project.year}</span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl text-cream">{project.title}</h3>
                  <p className="mt-1 text-sm text-cream-dim">{project.location}</p>
                </div>
                <ArrowUpRight size={18} className="mt-1 shrink-0 text-gold-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
