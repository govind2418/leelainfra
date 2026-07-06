import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { PROJECTS, getProjectBySlug } from "@/lib/projects";
import { ProjectDetailHero } from "@/sections/projects/ProjectDetailHero";
import { ProjectDetailContent } from "@/sections/projects/ProjectDetailContent";
import { CTASection } from "@/sections/shared/CTASection";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return buildMetadata({ title: "Project Not Found", path: `/projects/${slug}` });

  return buildMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <ProjectDetailHero project={project} />
      <ProjectDetailContent project={project} />
      <CTASection />
    </>
  );
}
