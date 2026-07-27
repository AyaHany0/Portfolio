import Works from "@/components/Works/Works";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Works",
  description:
    "Selected web development projects by Aya Hany — responsive marketing sites, e-commerce front-ends and interactive JavaScript apps.",
  path: "/works",
  type: "website",
});

export default function WorksPage() {
  return <Works />;
}
