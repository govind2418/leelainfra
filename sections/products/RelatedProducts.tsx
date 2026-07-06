import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { PRODUCTS } from "@/lib/products";

export function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const related = PRODUCTS.filter((p) => p.slug !== currentSlug).slice(0, 3);

  return (
    <section className="container-luxe py-24">
      <p className="eyebrow mb-8">Explore More</p>
      <div className="grid gap-6 sm:grid-cols-3">
        {related.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`} data-cursor="hover" className="group block">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-line">
              <MediaFrame
                image={product.image}
                art={product.art}
                seed={product.slug.length}
                alt={product.name}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-full w-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <h3 className="font-display text-lg text-cream">{product.name}</h3>
              <ArrowUpRight size={16} className="text-gold-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
