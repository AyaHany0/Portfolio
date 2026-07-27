import "./globals.css";
import { montserrat, roboto } from "./fonts";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Providers from "./providers";
import { siteConfig } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    "Aya Hany",
    "front-end developer",
    "React developer",
    "Next.js developer",
    "Tailwind CSS",
    "web developer Egypt",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.siteName,
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.siteName,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Person + WebSite graph so search engines resolve the site owner and site name.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      alternateName: siteConfig.handle,
      url: siteConfig.url,
      image: `${siteConfig.url}/opengraph-image`,
      jobTitle: siteConfig.jobTitle,
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressCountry: siteConfig.country,
      },
      sameAs: [siteConfig.github, siteConfig.linkedin],
      knowsAbout: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "UI/UX Design",
        "API Integration",
        "Web Animations",
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Kafr El-Sheikh University",
        },
        {
          "@type": "EducationalOrganization",
          name: "Route IT Training Center",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.siteName,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": `${siteConfig.url}/#person` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
