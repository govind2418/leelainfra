import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArtPlate } from "@/components/ui/ArtPlate";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { PRODUCTS } from "@/lib/products";
import type { Project } from "@/lib/projects";

export function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <section className="container-luxe py-24">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line">
            <ArtPlate variant={project.art} seed={12} className="h-full w-full" />
          </div>
          <p className="mt-8 text-base leading-relaxed text-cream-dim">{project.description}</p>
        </Reveal>

        <Reveal delay={100}>
          <GlassCard hover={false}>
            <p className="eyebrow mb-6">Materials Specified</p>
            <ul className="space-y-3">
              {project.scope.map((item) => {
                const product = PRODUCTS.find((p) => p.name === item);
                return (
                  <li key={item}>
                    <Link
                      href={product ? `/products/${product.slug}` : "/products"}
                      className="flex items-center justify-between border-b border-line py-3 text-sm text-cream-dim last:border-0 hover:text-gold-300"
                    >
                      {item}
                      <ArrowUpRight size={14} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
