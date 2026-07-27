import Services from "@/components/Services/Services";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Web development, front-end development, UI/UX design, API integration, performance optimisation and web animations offered by Aya Hany.",
  path: "/services",
  type: "website",
});

export default function ServicesPage() {
  return <Services />;
}
