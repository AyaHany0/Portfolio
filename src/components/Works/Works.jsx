import React from "react";
import Reveal from "../Reveal/Reveal";
import ProjectCard from "./ProjectCard";
import WorksFilter from "./WorksFilter";
import { projects, techFilters } from "@/data/projects";
import { siteConfig } from "@/lib/site";

// One trigger for the whole grid, with the stagger doing the sequencing. The
// `.animate` marker used to sit on the grid wrapper, where it matched a single
// element and the stagger silently did nothing.
//
// `clearProps` matters here: the tween animates `y` and `scale`, so GSAP leaves
// `transform: translate(0px, 0px) scale(1, 1)` inline on every card forever,
// which outranks Tailwind's `hover:scale-105` and kills the hover. The tween's
// end state is identical to the CSS default, so clearing it is free and hands
// styling control back to the class list.
const revealGroups = [
  {
    selector: ".animate",
    start: "top 80%",
    from: { opacity: 0, y: 200, scale: 0.8 },
    to: {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.8,
      stagger: 0.1,
      ease: "power3.out",
      clearProps: "all",
    },
  },
];

// Static markup, so it survives filtering untouched — the client only ever
// toggles a class, it never removes a card from the document.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Selected works",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: project.title,
    url: `${siteConfig.url}/works/${project.slug}`,
  })),
};

export default function Works() {
  return (
    <Reveal
      groups={revealGroups}
      className="xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-md mx-auto p-4 "
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">Selected works</h1>

      {/* The cards are built here, on the server, and handed to the client
          filter as children — only the filter itself crosses the boundary. */}
      <WorksFilter
        filters={techFilters}
        items={projects.map(({ slug, tech }) => ({ slug, tech }))}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            /* First card is the LCP element. Sound only because the grid always
               renders unfiltered on load, so index 0 is guaranteed visible. */
            priority={index === 0}
          />
        ))}
      </WorksFilter>
    </Reveal>
  );
}
