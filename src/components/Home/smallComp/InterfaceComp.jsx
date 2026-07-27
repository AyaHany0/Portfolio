import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../Button/Button";

export default function InterfaceComp({
  img,
  path,
  about,
  title,
  priority = false,
}) {
  const isExternal = path.startsWith("http");

  /* No aria-label here, on purpose. An earlier pass added one to disambiguate
     cards that shared a title, and it broke `label-content-name-mismatch`: an
     accessible name has to contain the element's own visible text, or someone
     using voice control cannot activate the link by reading what they see. The
     duplicate titles were the real bug and were fixed at the source, so the
     visible text is already unique and makes a better name than anything
     hand-written. The new-tab hint goes inside the link as text, so it extends
     that name rather than replacing it. */
  const content = (
    <>
      <div className="flex justify-center">
        <Image
          src={img}
          alt=""
          className="w-full h-auto m-6 md:m-0"
          /* These cards sit in a one-, two- or four-column grid inside a
             max-w-6xl container. With no `sizes`, next/image assumes the image
             spans the viewport and hands a phone a candidate several times wider
             than the slot it actually lands in. */
          sizes="(min-width: 1280px) 300px, (min-width: 768px) 45vw, 90vw"
          /* Opt-in per instance: whichever card is the LCP element needs eager
             loading and fetchpriority=high, and every other card must stay lazy
             so they do not compete with it for bandwidth.
             `priority` alone only emits the preload link — next/image treats
             `fetchPriority` as a separate prop and does not derive it — and the
             missing hint is exactly what `lcp-discovery-insight` fails on. */
          priority={priority}
          fetchPriority={priority ? "high" : undefined}
        />
      </div>
      <div className="flex gap-2 justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-primary font-body">{about}</p>
          <h2 className="font-heading text-lg font-semibold capitalize">
            {title}
          </h2>
        </div>
        <Button className="group" />
      </div>
      {isExternal && <span className="sr-only">(opens in a new tab)</span>}
    </>
  );

  return isExternal ? (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between space-y-2"
    >
      {content}
    </a>
  ) : (
    <Link
      href={`/${path}`}
      className="group flex flex-col justify-between space-y-2"
    >
      {content}
    </Link>
  );
}
