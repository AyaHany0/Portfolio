import React from "react";
import Image from "next/image";
import profile from "../../assets/profile.webp";
import icon from "../../assets/icon2.png";
import star from "../../assets/star-2.png";
import InterfaceConnect from "../Home/smallComp/InterfaceConnect";
import InterfaceServices from "../Home/smallComp/InterfaceServices";
import InterfaceComp from "../Home/smallComp/InterfaceComp";
import signature from "../../assets/signature.png";
import Reveal from "../Reveal/Reveal";

// The profile and summary cards are above the fold and their reveal was triggered
// off the page container, so it fired on load. That reveal is gone: with GSAP
// loaded asynchronously it could only flash, and it held up the first paint. The
// experience/education row and row 3 are genuinely below the fold, so they keep
// real scroll triggers.
const revealGroups = [
  {
    selector: ".animate-mid",
    trigger: ".row2",
    start: "top 90%",
    from: { opacity: 0, y: 50, scale: 0.8 },
    to: {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    },
  },
  {
    selector: ".animate-late",
    trigger: ".row3",
    start: "top 90%",
    from: { opacity: 0, y: 150 },
    to: { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 },
  },
];

export default function About() {
  return (
    <Reveal
      groups={revealGroups}
      className="xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-md mx-auto p-4 space-y-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between">
        <div className="com-card col-span-1">
          <Image
            src={profile}
            alt="Aya Hany"
            className=" h-full object-cover bg-card-blue rounded-2xl text-center"
            priority
          />
        </div>

        <div className="text-center space-y-3 col-span-2">
          <div className="flex gap-3 justify-between items-center">
            <Image src={star} alt="" />
            <h1 className="lg:text-7xl text-4xl font-semibold">SELF-SUMMARY</h1>
            <Image src={star} alt="" />
          </div>
          <div className="com-card items-center  ">
            <div className=" -mt-5 md:-mt-6 ps-5">
              <Image src={icon} alt="" />
            </div>

            <div className="flex justify-between items-end mt-6">
              <div className="text-4xl font-semibold text-start space-y-3 p-5">
                <h2>Aya Hany</h2>
                <p className="text-base text-primary  pe-10">
                  I&apos;m a front-end developer from Egypt with a focus on
                  creating
                  engaging, user-friendly web experiences. Skilled in HTML, CSS,
                  JavaScript, and React, I combine functionality with aesthetics
                  to deliver solutions that are both visually appealing and
                  highly functional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row2 grid grid-cols-1 md:grid-cols-2 justify-between gap-5 text-start">
        <div className="animate-mid flex flex-col gap-5  justify-center com-card">
          <h2>EXPERIENCE</h2>
          <div>
            <h3 className="text-primary">Aug 2024 - Nov 2024</h3>
            <p className="text-lg "> Front-End developer </p>
            <span className="text-primary">Web Masters</span>
          </div>
               <div>
            <h3 className="text-primary">March 2025 - Present</h3>
            <p className="text-lg "> Front-End developer </p>
            <span className="text-primary">Mdarj</span>
          </div>
        </div>
        <div className="animate-mid flex flex-col gap-5 com-card">
          <h2>EDUCATION</h2>
          <div>
            <h3 className="text-primary">Aug 2018 - May 2022</h3>
            <p className="text-lg ">
              Bachelor of Education, Computer Science Department
            </p>
            <span className="text-primary"> Kafr El-Sheikh University</span>
          </div>
          <div>
            <h3 className="text-primary">Dec 2023 - May 2024</h3>
            <p className="text-lg ">Programming Fundamentals diploma</p>
            <span className="text-primary"> Route IT training center</span>
          </div>
          <div>
            <h3 className="text-primary">Mar 2024 - Aug 2025</h3>
            <p className="text-lg "> Frontend Web Development</p>
            <span className="text-primary"> Route IT training center</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 row3 ">
        <div className="animate-late  com-card col-span-1  xl:col-span-1 group">
          <InterfaceConnect />
          <div className="shine-effect"></div>
        </div>
        <div className="animate-late  com-card col-span-1 md:col-span-1 xl:col-span-2  h-full group">
          <InterfaceServices />
          <div className="shine-effect"></div>
        </div>
        <div className="animate-late com-card col-span-1 md:col-span-2 xl:col-span-1 group">
          <InterfaceComp
            title="credentials"
            about="MORE ABOUT ME"
            path="credentials"
            img={signature}
          />
          <div className="shine-effect"></div>
        </div>
      </div>
    </Reveal>
  );
}
