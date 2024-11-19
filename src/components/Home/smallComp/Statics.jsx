import React from "react";

export default function Statics() {
  return (
    <div>
      <div className="flex flex-wrap justify-around items-center gap-5">
        <div className="shadow-xl px-5 py-10 rounded-2xl bg-card-reverseDark text-center gap-3 flex-col flex flex-1">
          <h5 className="text-2xl">+01</h5>
          <p className="text-primary">
            YEARS <span>EXPERIENCE</span>
          </p>
        </div>
        <div className="shadow-xl px-5 py-10 rounded-2xl bg-card-reverseDark text-center gap-3 flex-col flex flex-1">
          <h5 className="text-2xl">+20</h5>
          <p className="text-primary">
            TOTAL <span>PROJECTS</span>
          </p>
        </div>
        <div className="shadow-xl px-5 py-10 rounded-2xl bg-card-reverseDark text-center gap-3 flex-col flex flex-1">
          <h5 className="text-2xl">+02</h5>
          <p className="text-primary">
            SATISFIED <span>CLIENTS</span>
          </p>
        </div>
      </div>
    </div>
  );
}
