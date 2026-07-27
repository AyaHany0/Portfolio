import Project from "@/components/Project/Project";

// Placeholder route with no real content yet — kept out of the index and the
// sitemap so it cannot dilute quality signals for the rest of the site.
export const metadata = {
  title: "Project",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: "/works/project" },
};

export default function ProjectPage() {
  return <Project />;
}
