import About from "@/components/About/About";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Self-summary, experience and education of Aya Hany, a front-end developer from Egypt specialising in React, Next.js and Tailwind CSS.",
  path: "/about",
  type: "profile",
});

export default function AboutPage() {
  return <About />;
}
