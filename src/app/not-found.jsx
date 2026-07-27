import NotFound from "@/components/NotFound/NotFound";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFoundPage() {
  return <NotFound />;
}
