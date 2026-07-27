import { siteConfig, indexableRoutes } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();

  return indexableRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
