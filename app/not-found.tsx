import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { ArtPlate } from "@/components/ui/ArtPlate";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-32">
      <ArtPlate variant="fluted" seed={99} className="absolute inset-0 h-full w-full opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />

      <div className="container-luxe relative z-10 text-center">
        <p className="font-display text-gradient-gold text-[8rem] leading-none sm:text-[11rem]">404</p>
        <h1 className="font-display mt-4 text-3xl text-cream sm:text-4xl">This space hasn&apos;t been designed yet.</h1>
        <p className="mx-auto mt-4 max-w-md text-cream-dim">
          The page you&rsquo;re looking for doesn&apos;t exist. Let&apos;s get you back to something beautiful.
        </p>
        <ButtonLink href="/" className="mt-9 inline-flex">
          Back to Home <ArrowUpRight size={16} />
        </ButtonLink>
      </div>
    </section>
  );
}
