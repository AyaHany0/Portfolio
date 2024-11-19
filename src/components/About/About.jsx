import React, { useEffect, useRef } from "react";
import profile from "../../assets/profile.webp";
import icon from "../../assets/icon2.png";
import star from "../../assets/star-2.png";
import InterfaceConnect from "../Home/smallComp/InterfaceConnect";
import InterfaceServices from "../Home/smallComp/InterfaceServices";
import InterfaceComp from "../Home/smallComp/InterfaceComp";
import signature from "../../assets/signature.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
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
      className="xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-md mx-auto p-4 space-y-5"
      ref={containerRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between">
        <div className=" animate-first com-card col-span-1">
          <img
            src={profile}
            alt=""
            className=" h-full object-cover bg-card-blue rounded-2xl text-center"
          />
        </div>

        <div className="  animate-first text-center space-y-3 col-span-2">
          <div className="flex gap-3 justify-between items-center">
            <img src={star} alt="star" />
            <h2 className="lg:text-7xl text-4xl font-semibold">SELF-SUMMARY</h2>
            <img src={star} alt="star" />
          </div>
          <div className="com-card items-center  ">
            <div className=" -mt-5 md:-mt-6 ps-5">
              <img src={icon} alt="star" />
            </div>

            <div className="flex justify-between items-end mt-6">
              <div className="text-4xl font-semibold text-start space-y-3 p-5">
                <h1>Aya Hany</h1>
                <p className="text-base text-primary  pe-10">
                  I'm a front-end developer from Egypt with a focus on creating
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

      <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5 text-start">
        <div className=" animate-first flex flex-col gap-5  justify-center com-card">
          <h2>EXPERIENCE</h2>
          <div>
            <h3 className="text-primary">Aug 2024 - Nov 2024</h3>
            <p className="text-lg "> Front-End developer </p>
            <span className="text-primary">Web Masters</span>
          </div>
        </div>
        <div className="animate-first flex flex-col gap-5 com-card">
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
        <div className="animate-late  com-card col-span-1  xl:col-span-1 hovering">
          <InterfaceConnect />
        </div>
        <div className="animate-late  com-card col-span-1 md:col-span-1 xl:col-span-2  h-full hovering">
          <InterfaceServices />
        </div>
        <div className="animate-late com-card col-span-1 md:col-span-2 xl:col-span-1 hovering">
          <InterfaceComp
            title="credentials"
            about="MORE ABOUT ME"
            path="credentials"
            img={signature}
          />
        </div>
      </div>
    </div>
  );
}
