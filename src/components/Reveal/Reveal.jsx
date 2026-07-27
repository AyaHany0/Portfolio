"use client";

import React, { useRef } from "react";
import { useGsapAnimation } from "@/lib/animation";

/**
 * Client boundary for scroll reveals.
 *
 * The page components used to be Client Components purely because they held a
 * ref and a GSAP effect, which dragged all of their markup — and every child
 * that markup rendered — into the client bundle with them. Passing that markup
 * through here as `children` keeps it on the server: only this wrapper ships.
 *
 * `groups` describes what to animate, so the same wrapper covers every page:
 *
 *   [{ selector: ".animate-late", trigger: ".row3", from: {...}, to: {...} }]
 *
 * Selectors are queried inside this wrapper's own element rather than the
 * document, so two Reveals on one page cannot pick up each other's targets.
 */
export default function Reveal({ groups, className, children, ...rest }) {
  const containerRef = useRef(null);

  useGsapAnimation((gsap) => {
    for (const { selector, trigger, start, from, to } of groups) {
      const targets = containerRef.current.querySelectorAll(selector);
      if (!targets.length) continue;

      gsap.fromTo(targets, from, {
        ...to,
        scrollTrigger: {
          // A string trigger is resolved against the document by ScrollTrigger,
          // so scope it here too; default to the wrapper itself.
          trigger: trigger
            ? containerRef.current.querySelector(trigger) ??
              containerRef.current
            : containerRef.current,
          start,
          toggleActions: "play none none none",
        },
      });
    }
  });

  return (
    <div ref={containerRef} className={className} {...rest}>
      {children}
    </div>
  );
}
