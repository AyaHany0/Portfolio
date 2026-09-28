// Single source of truth for absolute URLs and identity used by metadata,
// the sitemap, robots and the JSON-LD graph.
export const siteConfig = {
  url: "https://portfolio-nu-eight-29.vercel.app",
  name: "Aya Hany",
  handle: "@ayah28603",
  siteName: "Aya's Portfolio",
  jobTitle: "Front-End Developer",
  description:
    "Portfolio of Aya Hany, a front-end developer from Egypt building engaging, user-friendly web experiences with React, Next.js and Tailwind CSS.",
  locale: "en_US",
  country: "Egypt",
  github: "https://github.com/AyaHany0",
  linkedin: "https://www.linkedin.com/in/aya-hany-web-developer",
};

/**
 * Build a complete per-page metadata object.
 *
 * Next.js does NOT deep-merge `openGraph` / `twitter` from a parent layout — a
 * page that declares either one replaces the parent's object entirely, which
 * silently drops `og:image` and downgrades `twitter:card` to "summary". So every
 * page must restate the image and card, and this helper is the single place
 * that happens.
 */
export function buildMetadata({ title, description, path, type = "website" }) {
  const ogImage = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${siteConfig.name} — ${siteConfig.jobTitle}`,
  };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      url: path,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// Fixed routes that should appear in the sitemap. The per-project
// `/works/[slug]` pages are appended in `app/sitemap.js` from the project data,
// rather than restated here — this module is imported by the layout, robots and
// every page's metadata, and has no business pulling in the content records.
//
// The `/blog/articles` stub is deliberately excluded — it is a placeholder and
// is marked noindex on the page itself.
export const indexableRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/works", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.8, changeFrequency: "yearly" },
  { path: "/credentials", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/blog", priority: 0.4, changeFrequency: "monthly" },
];
