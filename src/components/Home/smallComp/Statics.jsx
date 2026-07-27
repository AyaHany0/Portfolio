import React from "react";

// These are stat figures, not section headings — they were <h5> inside a page
// whose outline starts at <h1>/<h2>, which is what Lighthouse's heading-order
// audit flagged. Plain text keeps them out of the document outline entirely.
const stats = [
  { figure: "+01", label: "YEARS", emphasis: "EXPERIENCE" },
  { figure: "+20", label: "TOTAL", emphasis: "PROJECTS" },
  { figure: "+02", label: "SATISFIED", emphasis: "CLIENTS" },
];

export default function Statics() {
  return (
    <div>
      <dl className="flex flex-wrap justify-around items-center gap-5">
        {stats.map(({ figure, label, emphasis }) => (
          <div
            key={emphasis}
            className="shadow-xl px-5 py-10 rounded-2xl bg-card-reverseDark text-center gap-3 flex-col flex flex-1"
          >
            <dd className="text-2xl">{figure}</dd>
            <dt className="text-primary">
              {label} <span>{emphasis}</span>
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
