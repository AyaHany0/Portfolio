import React from "react";
import Link from "next/link";

/**
 * The bouncing "404" was a GSAP tween, which meant this route pulled in the
 * whole animation library and had to be a Client Component. As a CSS keyframe it
 * costs nothing, starts before the first paint instead of flashing, and lets the
 * page be a Server Component. See `.drop-bounce` in globals.css.
 */
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      {/* 404 Header Animation */}
      <h1 className="font-heading text-9xl flex gap-2">
        <span className="inline-block drop-bounce">4</span>
        <span className="inline-block drop-bounce">0</span>
        <span className="inline-block drop-bounce">4</span>
      </h1>
      {/* Message */}
      <div className="text-xl">
        <span>
          Seems you are lost, come back{" "}
          <u className="cursor-pointer text-secondary">
            <Link href="/">Home</Link>
          </u>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
