import { siteConfig, indexableRoutes } from "@/lib/site";
import { projects } from "@/data/projects";

export default function sitemap() {
  const lastModified = new Date();

  return [
    ...indexableRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${siteConfig.url}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    // Case studies change far less often than the grid that links to them, and
    // sit below /works itself in importance.
    ...projects.map((project) => ({
      url: `${siteConfig.url}/works/${project.slug}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
