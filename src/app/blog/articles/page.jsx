import Articles from "@/components/Articles/Articles";

// Placeholder route with no real content yet — kept out of the index and the
// sitemap so it cannot dilute quality signals for the rest of the site.
export const metadata = {
  title: "Articles",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: "/blog/articles" },
};

export default function ArticlesPage() {
  return <Articles />;
}
