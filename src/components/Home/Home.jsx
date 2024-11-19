import React, { useEffect, useRef } from "react";
import Profile from "./smallComp/Profile";
import InfiniteScroll from "./smallComp/InfiniteScroll";
import InterfaceComp from "./smallComp/InterfaceComp";
import InterfaceServices from "./smallComp/InterfaceServices";
import InterfaceConnect from "./smallComp/InterfaceConnect";
import WorkTogether from "./smallComp/WorkTogether";
import Statics from "./smallComp/Statics";
import blog from "../../assets/gFonts.png";
import signature from "../../assets/signature.png";
import screen from "../../assets/screen.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const containerRef = useRef(null); // Reference to the parent container

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = containerRef.current.querySelectorAll(".animate-first ");
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    const lastElements = containerRef.current.querySelectorAll(".animate-late");
    gsap.fromTo(
      lastElements,
      {
        opacity: 0,
        y: 150,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".row3",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      id="home"
      className="xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-md mx-auto p-4"
    >
      <div className="grid gap-5">
        {/* Row 1 */}
        <div className="row1 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="animate-first  flex items-center com-card group">
            <Profile />
            <div className="shine-effect"></div>
          </div>
          <div className="h-full flex flex-col gap-5">
            {/* Scroll Section */}
            <div className="animate-first com-card overflow-hidden flex items-center h-fit ">
              <InfiniteScroll />
            </div>

            {/* Remaining Row */}
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-5 ">
              <div className="animate-first com-card group">
                <InterfaceComp
                  title="credentials"
                  about="MORE ABOUT ME"
                  path="credentials"
                  img={signature}
                />
                <div className="shine-effect"></div>
              </div>
              <div className="animate-first com-card group">
                <InterfaceComp
                  title="projects"
                  about="SHOWCASE"
                  path="works"
                  img={screen}
                />
                <div className="shine-effect"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row2 grid grid-cols-1 lg:grid-cols-4 gap-5 row-span-1">
          <div className="animate-first com-card h-full group">
            <InterfaceComp title="GFonts" about="BLOG" path="blog" img={blog} />
            <div className="shine-effect"></div>
          </div>
          <div className="animate-first com-card lg:col-span-2 h-full relative group ">
            <InterfaceServices />
            <div className="shine-effect"></div>
          </div>
          <div className="animate-first com-card h-full group relative">
            <InterfaceConnect />
            <div className="shine-effect"></div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row3 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className=" animate-late com-card group">
            <Statics />
            <div className="shine-effect"></div>
          </div>
          <div className=" animate-late com-card overflow-hidden group">
            <WorkTogether />
            <div className="shine-effect"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
