"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { PROJECTS } from "@/lib/projects";

export function FeaturedProjects() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section className="container-luxe py-28">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Spaces we've helped bring to life."
          description="A glimpse at recent residential, hospitality and commercial fit-outs specified end-to-end by our design team."
        />
        <ButtonLink href="/projects" variant="ghost" className="shrink-0">
          All Projects <ArrowUpRight size={16} />
        </ButtonLink>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={`/projects/${project.slug}`} data-cursor="hover" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
                <MediaFrame
                  image={project.image}
                  art={project.art}
                  seed={i + 4}
                  alt={project.title}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <span className="eyebrow absolute top-5 left-5 rounded-full bg-ink/60 px-3 py-1 backdrop-blur-sm">
                  {project.year}
                </span>
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
      </div>
    </section>
  );
}
