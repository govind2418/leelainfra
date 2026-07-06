import { Reveal } from "@/components/ui/Reveal";

export function Mission() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      </div>
      <div className="container-luxe">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-6 justify-center">Our Mission</p>
          <p className="font-accent text-3xl leading-snug text-cream italic sm:text-4xl lg:text-5xl">
            &ldquo;To provide luxurious, high-end architectural solutions that inspire creativity
            and enhance the beauty of every space — ensuring satisfaction through quality,
            craftsmanship and honest service.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
