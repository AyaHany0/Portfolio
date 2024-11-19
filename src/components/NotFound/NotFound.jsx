import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NotFound = () => {
  const headerRef = useRef();

  useEffect(() => {
    // GSAP animation for the "404" text using React refs
    gsap.fromTo(
      headerRef.current.children,
      {
        y: "-100vh",
      },
      {
        y: 0,
        ease: "bounce.out",
        duration: 1.5,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      {/* 404 Header Animation */}
      <div ref={headerRef} className="font-heading text-9xl flex gap-2">
        <span className="inline-block">4</span>
        <span className="inline-block">0</span>
        <span className="inline-block">4</span>
      </div>
      {/* Message */}
      <div className="text-xl">
        <span>
          Seems you are lost, come back{" "}
          <u className="cursor-pointer text-secondary">
            <a href="/">Home</a>
          </u>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
