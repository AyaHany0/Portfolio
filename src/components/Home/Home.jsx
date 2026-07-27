import React from "react";
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
import Reveal from "../Reveal/Reveal";

// Rows 1 and 2 are above the fold; their reveal used to be triggered off the
// page container, so it ran on load. That is gone — with GSAP now loaded
// asynchronously it could only paint, blank and then animate, and it delayed the
// LCP paint for no real gain. Row 3 is genuinely below the fold, so its scroll
// reveal is untouched: the GSAP chunk arrives long before the trigger is hit.
const revealGroups = [
  {
    selector: ".animate-late",
    trigger: ".row3",
    start: "top 90%",
    from: { opacity: 0, y: 150 },
    to: { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 },
  },
];

export default function Home() {
  return (
    <Reveal
      groups={revealGroups}
      id="home"
      className="xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-md mx-auto p-4"
    >
      <div className="grid gap-5">
        {/* Row 1 */}
        <div className="row1 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex items-center com-card group">
            <Profile />
            <div className="shine-effect"></div>
          </div>
          <div className="h-full flex flex-col gap-5">
            {/* Scroll Section */}
            <div className="com-card overflow-hidden flex items-center h-fit ">
              <InfiniteScroll />
            </div>

            {/* Remaining Row */}
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-5 ">
              <div className="com-card group">
                {/* Lighthouse identifies this card's image as the LCP element on
                    mobile. It was lazy-loaded with no priority hint, so the fetch
                    did not start until layout — the single biggest contributor to
                    the 3.2 s LCP. */}
                <InterfaceComp
                  title="credentials"
                  about="MORE ABOUT ME"
                  path="credentials"
                  img={signature}
                  priority
                />
                <div className="shine-effect"></div>
              </div>
              <div className="com-card group">
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
          <div className="com-card h-full group">
            <InterfaceComp title="GFonts" about="BLOG" path="blog" img={blog} />
            <div className="shine-effect"></div>
          </div>
          <div className="com-card lg:col-span-2 h-full relative group ">
            <InterfaceServices />
            <div className="shine-effect"></div>
          </div>
          <div className="com-card h-full group relative">
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
    </Reveal>
  );
}
