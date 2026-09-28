import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

/**
 * Works-grid card. Deliberately separate from InterfaceComp rather than a new
 * mode on it: InterfaceComp is shared by Home, About and Services, and its
 * image is rendered at intrinsic size with a hand-tuned `sizes` that the home
 * page's LCP card depends on. This grid needs an aspect-locked `fill` image,
 * which would mean branching that path for one of five call sites.
 *
 * Two constraints carried over from InterfaceComp, both load-bearing:
 *   - `alt=""`, because the adjacent <h2> already names the link. A second name
 *     on the image would be read out twice.
 *   - No `aria-label`. An accessible name has to contain the element's visible
 *     text or voice-control users cannot activate the link by reading it, which
 *     is exactly what `label-content-name-mismatch` fails on.
 */
export default function ProjectCard({ project, priority = false }) {
  return (
    <Link
      href={`/works/${project.slug}`}
      className="group flex flex-col justify-between space-y-4 h-full"
    >
      {/* Locked ratio because the screenshots range from 395×590 portrait to
          1080×693 landscape — left at intrinsic size, a three-column grid comes
          out visibly ragged. The detail page shows each one uncropped. */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Image
          src={project.img}
          alt=""
          fill
          className="object-cover object-top"
          /* max-w-6xl (1152) − p-4 (32) − 2 × gap-5 (40) ÷ 3 columns ≈ 360px. */
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
          /* Opt-in per instance: only the LCP card wants eager loading, and
             next/image does not derive `fetchPriority` from `priority`, so the
             hint has to be passed alongside it. */
          priority={priority}
          fetchPriority={priority ? "high" : undefined}
        />
      </div>
      <div className="flex gap-2 justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-primary font-body">{project.category}</p>
          <h2 className="font-heading text-lg font-semibold">
            {project.title}
          </h2>
        </div>
        <Button className="group" />
      </div>
    </Link>
  );
}
