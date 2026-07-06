import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { CONTACT } from "@/lib/constants";

export function CTASection({
  title = "Elevate Your Space with Our Expertise.",
  description = "Contact us today to discover how we can bring your interior dreams to life with premium materials and designs.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-luxe py-28">
      <Reveal className="glass-panel-strong relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:px-16">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/15 blur-[100px]" />
        <p className="eyebrow relative z-10 mb-5 justify-center">Get Started</p>
        <h2 className="font-display relative z-10 mx-auto max-w-2xl text-4xl leading-tight font-medium text-cream sm:text-5xl">
          {title}
        </h2>
        <p className="relative z-10 mx-auto mt-5 max-w-lg text-cream-dim">{description}</p>
        <div className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Magnetic>
            <ButtonLink href="/contact">
              Explore Now <ArrowUpRight size={16} />
            </ButtonLink>
          </Magnetic>
          <ButtonLink href={CONTACT.whatsapp} variant="ghost">
            Chat on WhatsApp
          </ButtonLink>
        </div>
        <p className="relative z-10 mt-6 text-xs text-cream-faint">
          Or call{" "}
          <a href={CONTACT.phoneHref} className="text-gold-300 hover:underline">
            {CONTACT.phoneDisplay}
          </a>
        </p>
      </Reveal>
    </section>
  );
}
