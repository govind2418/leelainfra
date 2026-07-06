import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/sections/shared/PageHero";
import { Story } from "@/sections/about/Story";
import { Mission } from "@/sections/about/Mission";
import { Stats } from "@/sections/about/Stats";
import { Values } from "@/sections/about/Values";
import { Team } from "@/sections/about/Team";
import { Process } from "@/sections/about/Process";
import { CTASection } from "@/sections/shared/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Leela Infra Solution is a Mira Road-based architectural products house delivering premium wooden flooring, panelling, veneers, laminates, hardware and bath fittings since our founding.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Leela Infra"
        title="Crafting interiors with integrity, innovation and excellence."
        description="A material authority built for architects, designers and homeowners who see interiors as architecture — not an afterthought."
        crumb="About"
        art="veneer"
      />
      <Story />
      <Mission />
      <Stats />
      <Values />
      <Team />
      <Process />
      <CTASection />
    </>
  );
}
