import Contact from "@/components/Contact/Contact";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Aya Hany about front-end development work, freelance projects and collaborations.",
  path: "/contact",
  type: "website",
});

export default function ContactPage() {
  return <Contact />;
}
