import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const CTA_BASE =
  "px-6 py-3 rounded-lg font-medium font-heading transition-colors duration-300 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/**
 * Per-project case study.
 *
 * No Reveal wrapper, on purpose. The hero sits above the fold, and GSAP is
 * loaded asynchronously — an on-load reveal there can only paint, blank, then
 * animate. Skipping it also leaves this page at zero client JavaScript.
 */
export default function ProjectDetail({ project }) {
  const url = `${siteConfig.url}/works/${project.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        name: project.title,
        description: project.summary,
        url,
        image: `${siteConfig.url}${project.img.src}`,
        // Ties every project back to the Person node in the root layout, so
        // these read as one author's body of work rather than orphaned nodes.
        creator: { "@id": `${siteConfig.url}/#person` },
        keywords: project.stack.join(", "),
        ...(project.liveUrl && { sameAs: [project.liveUrl] }),
        ...(project.repoUrl && { codeRepository: project.repoUrl }),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Works",
            item: `${siteConfig.url}/works`,
          },
          { "@type": "ListItem", position: 3, name: project.title, item: url },
        ],
      },
    ],
  };

  return (
    <article className="xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-md mx-auto p-4 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/works"
        className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors duration-300 font-body"
      >
        <span aria-hidden="true">&larr;</span> Back to works
      </Link>

      <header className="space-y-3">
        <p className="text-primary font-body">{project.category}</p>
        <h1 className="lg:text-6xl text-4xl font-semibold font-heading">
          {project.title}
        </h1>
        <p className="text-darkWhite font-body max-w-3xl">{project.summary}</p>
      </header>

      {/* Intrinsic dimensions rather than an aspect lock: the card crops to keep
          the grid even, but here the whole screenshot is the point. */}
      <Image
        src={project.img}
        alt={project.imageAlt}
        className="w-full h-auto rounded-3xl border-border border-[0.5px]"
        sizes="(min-width: 1280px) 1152px, 100vw"
        placeholder="blur"
        priority
        fetchPriority="high"
      />

      <section className="com-card space-y-3">
        <h2 className="text-2xl font-semibold font-heading">Overview</h2>
        {project.overview.map((paragraph) => (
          <p key={paragraph} className="text-darkWhite font-body">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="com-card space-y-3">
        <h2 className="text-2xl font-semibold font-heading">My Contributions</h2>
        <ul className="list-disc ps-5 space-y-2 text-darkWhite font-body">
          {project.contributions.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
      </section>

      {project.soloFeature && (
        /* com-revcard's lighter gradient makes this read as a pull-out against
           the com-card sections above, without inventing a new class. */
        <aside
          aria-labelledby="solo-feature"
          className="com-revcard space-y-2 border-secondary"
        >
          <p className="text-secondary font-body text-sm uppercase tracking-wide">
            Built solo
          </p>
          <h2
            id="solo-feature"
            className="text-2xl font-semibold font-heading"
          >
            {project.soloFeature.title}
          </h2>
          <p className="text-darkWhite font-body">{project.soloFeature.body}</p>
        </aside>
      )}

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold font-heading">Built with</h2>
        {/* Plain list items, not links: routing a chip to a filtered /works
            would need URL state the works grid deliberately does not carry. */}
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="px-3 py-1 rounded-full bg-subprimary text-darkWhite text-sm font-body border-border border-[0.5px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap gap-3">
        {/* The new-tab hint lives inside the link so it extends the accessible
            name rather than replacing it. */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${CTA_BASE} bg-white text-subprimary hover:bg-subprimary hover:text-white`}
          >
            View live site<span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${CTA_BASE} bg-subprimary text-white hover:bg-white hover:text-subprimary`}
          >
            View source<span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}
