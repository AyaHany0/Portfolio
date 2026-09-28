"use client";

import React, { Children, useState } from "react";

const BUTTON_BASE =
  "px-4 py-2 rounded-lg font-medium font-heading transition-colors duration-300 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/**
 * Technology filter for the works grid.
 *
 * The cards arrive as `children` already rendered on the server — the same
 * trick Reveal uses — so the only thing that ships to the client is this
 * wrapper: one piece of state and a map. The card markup, the project copy and
 * fourteen base64 blur placeholders all stay behind.
 *
 * `items` is the parallel metadata this component actually needs to make its
 * decision. It is a deliberate second prop rather than something read off the
 * children, because introspecting elements to patch their className is far more
 * fragile than owning the <li> wrapper outright.
 *
 * Every card stays mounted; filtering only toggles `hidden`. That matters more
 * than it looks: Reveal fires `gsap.fromTo` exactly once on mount with
 * `toggleActions: "play none none none"`. Unmount and remount a card and it
 * quietly skips the reveal, so the same card animates or doesn't depending on
 * which filter you arrived through. Stable nodes mean GSAP's inline writes and
 * React's reconciliation never contend — React only ever changes className.
 *
 * `display: none` specifically, not `opacity-0` or `invisible`: it drops the
 * card out of the accessibility tree *and* the tab order. Hiding by opacity
 * would leave up to thirteen invisible project links still reachable by Tab.
 */
export default function WorksFilter({ filters, items, children }) {
  const [active, setActive] = useState("all");

  // `items` and `children` are both projects.map(...) in Works.jsx, a few lines
  // apart, so the indices line up by construction. Cheap insurance in dev.
  const cards = Children.toArray(children);
  if (process.env.NODE_ENV !== "production" && cards.length !== items.length) {
    console.warn(
      `WorksFilter: ${cards.length} cards but ${items.length} items — the two must be built from the same array.`
    );
  }

  const isVisible = (item) => active === "all" || item.tech.includes(active);
  const visibleCount = items.filter(isVisible).length;

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by technology"
        className="flex flex-wrap gap-2"
      >
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            aria-pressed={active === filter.id}
            onClick={() => setActive(filter.id)}
            className={`${BUTTON_BASE} ${
              active === filter.id
                ? "bg-white text-subprimary"
                : "bg-subprimary text-primary hover:bg-white hover:text-subprimary"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Rendered from the first paint rather than mounted alongside the change
          it describes — a live region that appears at the same moment as its
          content is not announced. Visible rather than sr-only because the
          count is useful to everyone. */}
      <p role="status" className="text-primary font-body text-sm mt-4 mb-6">
        Showing {visibleCount} of {items.length} projects
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <li
            key={items[index].slug}
            className={`com-card relative overflow-hidden group animate motion-safe:hover:scale-105 transition-transform duration-150 ${
              isVisible(items[index]) ? "" : "hidden"
            }`}
          >
            {card}
            <div className="shine-effect"></div>
          </li>
        ))}
      </ul>
    </>
  );
}
