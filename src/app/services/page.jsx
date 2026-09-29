import Services from "@/components/Services/Services";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Web and front-end development, dashboards, GIS map integration, API integration, real-time features, multilingual RTL sites, UI/UX design and web animations offered by Aya Hany.",
  path: "/services",
  type: "website",
});

export default function ServicesPage() {
  return <Services />;
}
