"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type { Project } from "@/lib/projects";

export function ProjectDetailHero({ project }: { project: Project }) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden pt-40 pb-16">
      <MediaFrame image={project.image} art={project.art} seed={7} alt={project.title} priority sizes="100vw" className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />

      <div className="container-luxe relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 flex items-center gap-2 text-xs text-cream-faint"
        >
          <Link href="/" className="hover:text-gold-300">Home</Link>
          <ChevronRight size={12} />
          <Link href="/projects" className="hover:text-gold-300">Projects</Link>
          <ChevronRight size={12} />
          <span className="text-cream-dim">{project.title}</span>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="eyebrow mb-4 inline-block"
        >
          {project.typology} · {project.location} · {project.year}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display max-w-3xl text-5xl leading-[1.03] font-medium text-cream sm:text-6xl lg:text-7xl"
        >
          {project.title}
        </motion.h1>
      </div>
    </section>
  );
}
