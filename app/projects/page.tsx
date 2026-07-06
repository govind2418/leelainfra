import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/sections/shared/PageHero";
import { ProjectsGrid } from "@/sections/projects/ProjectsGrid";
import { CTASection } from "@/sections/shared/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Residential, hospitality and commercial interiors delivered by Leela Infra Solution across Mumbai, Alibaug and Goa.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Interiors delivered end-to-end, on schedule."
        description="A cross-section of residential, hospitality and commercial fit-outs — filter by the material category that matters to your brief."
        crumb="Projects"
        art="wood"
      />
      <ProjectsGrid />
      <CTASection />
    </>
  );
}
