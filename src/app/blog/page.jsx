import Blog from "@/components/Blog/Blog";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "GFonts — writing and notes on front-end development by Aya Hany. Coming soon.",
  path: "/blog",
  type: "website",
});

export default function BlogPage() {
  return <Blog />;
}
