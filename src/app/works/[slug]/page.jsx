import { notFound } from "next/navigation";
import ProjectDetail from "@/components/Project/ProjectDetail";
import { projects, getProjectBySlug } from "@/data/projects";
import { buildMetadata } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Anything outside generateStaticParams 404s without ever invoking the page, so
// the route stays fully static and there is no on-demand path to reason about.
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found", robots: { index: false, follow: false } };
  }

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/works/${project.slug}`,
    type: "article",
  });
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Unreachable while dynamicParams is false, but the page should not render a
  // half-built case study if that ever changes.
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
