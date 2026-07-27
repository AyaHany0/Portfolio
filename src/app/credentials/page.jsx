import Credentials from "@/components/Credentials/Credentials";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Credentials",
  description:
    "Full background of Aya Hany: about, professional experience, education and front-end development skills.",
  path: "/credentials",
  type: "profile",
});

export default function CredentialsPage() {
  return <Credentials />;
}
