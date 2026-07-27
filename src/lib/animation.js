"use client";

import { useEffect, useRef } from "react";

/**
 * Build scroll-reveal animations with GSAP, loaded off the critical path.
 *
 * GSAP core plus ScrollTrigger measured 44.6 kB gzipped — roughly a quarter of
 * the home page's initial JavaScript — and every animation they drive is a
 * scroll reveal that cannot run until the visitor scrolls anyway. They are
 * imported dynamically after hydration so they no longer compete with the LCP
 * image for bandwidth. The `setup` callback therefore receives `gsap` as an
 * argument: importing it statically in a component would pull it straight back
 * into the initial bundle and undo this.
 *
 * The same trade-off is why nothing here reveals content that is already visible
 * on load. With GSAP arriving asynchronously there is no way to set a `from`
 * state before the first paint, so an on-load reveal would paint, blank, then
 * animate. Those reveals were removed rather than left to flash.
 *
 * `matchMedia` covers the rest: the `no-preference` query means no tween is ever
 * built for visitors who asked for reduced motion, and `mm.revert()` kills every
 * tween and ScrollTrigger on unmount. Nothing used to clean up, so with
 * `reactStrictMode` on, the dev double-mount built each animation twice and
 * client-side navigation leaked ScrollTriggers for the rest of the session.
 */
export function useGsapAnimation(setup) {
  const setupRef = useRef(setup);
  setupRef.current = setup;

  useEffect(() => {
    let mediaQuery;
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      // The component can unmount while the chunk is still in flight.
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      mediaQuery = gsap.matchMedia();
      mediaQuery.add("(prefers-reduced-motion: no-preference)", () =>
        setupRef.current(gsap)
      );
    })();

    return () => {
      cancelled = true;
      if (mediaQuery) mediaQuery.revert();
    };
  }, []);
}
