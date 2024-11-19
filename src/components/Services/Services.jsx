import React, { useEffect, useRef } from "react";

import {
  MdDashboard,
  MdDeveloperMode,
  MdOutlineDesignServices,
} from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { CiPlug1 } from "react-icons/ci";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsMagic } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
import star from "../../assets/star-2.png";
import WorkTogether from "../Home/smallComp/WorkTogether";
import InterfaceComp from "../Home/smallComp/InterfaceComp";
import signature from "../../assets/signature.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import InterfaceConnect from "../Home/smallComp/InterfaceConnect";
export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const icons = containerRef.current.querySelectorAll(".icon");
    gsap.fromTo(
      icons,
      {
        opacity: 0,
        x: -50,
        scale: 0.8,
      },
      {
        opacity: 1,
        x: 0,
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
    const headings = containerRef.current.querySelectorAll(".headings");
    gsap.fromTo(
      headings,
      {
        opacity: 0,
        x: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        x: 0,
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

    const cards = containerRef.current.querySelectorAll(".card");
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
        ease: "back.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play play none none",
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
        <div className="col-span-1 md:col-span-1 gap-5  ">
          <aside className="com-card col-span-1 lg:sticky lg:top-16 lg:h-fit">
            <ul className="flex flex-col justify-between  gap-10">
              <li className=" flex justify-between ">
                <MdDeveloperMode className="text-3xl icon" />
                <p className="text-md font-medium headings">Wev Development</p>
              </li>
              <li className=" flex justify-between  ">
                <FaLaptopCode className="text-3xl icon" />
                <p className="text-md font-medium headings">
                  Front-End Development
                </p>
              </li>
              <li className=" flex justify-between  ">
                <MdOutlineDesignServices className="text-3xl icon " />
                <p className="text-md font-medium headings">UI/UX Design</p>
              </li>
              <li className=" flex justify-between  ">
                <CiPlug1 className="text-3xl icon" />
                <p className="text-md font-medium headings">API Integration</p>
              </li>
              <li className=" flex justify-between  ">
                <AiFillThunderbolt className="text-3xl icon" />
                <p className="text-md font-medium headings">
                  Performance Optimization
                </p>
              </li>
              <li className=" flex justify-between  ">
                <BsMagic className="text-3xl icon" />
                <p className="text-md font-medium headings">Web Animations</p>
              </li>

              <li className=" flex justify-between  ">
                <MdDashboard className="text-3xl icon" />
                <p className="text-md font-medium headings">
                  Website Maintenance
                </p>
              </li>
              <li className=" flex justify-between">
                <GiMagnifyingGlass className="text-3xl icon" />
                <p className="text-md font-medium headings">
                  Testing and Debugging
                </p>
              </li>
            </ul>
          </aside>
        </div>
        <div className="col-span-1 md:col-span-2 gap-5 ">
          {/* heading */}
          <div className="text-center m-5">
            <div className="flex gap-3 justify-between items-center">
              <img src={star} alt="star" />
              <h2 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl transition-all duration-100  ease-in-out font-semibold">
                MY OFFERINGS{" "}
              </h2>
              <img src={star} alt="star" />
            </div>
          </div>
          <div className="com-card col-span-1 grid grid-cols-2 gap-5">
            <div className=" com-revcard col-span-2 md:col-span-1 flex flex-col gap-3  card">
              <h3 className="text-primary font-medium font-heading">
                Web Development
              </h3>
              <p className="text-darkWhite font-body">
                Creating fully responsive, user-friendly websites that function
                seamlessly across all devices. I focus on building clean,
                efficient code for optimal performance and usability.
              </p>
            </div>
            <div className=" com-revcard col-span-2 md:col-span-1 flex flex-col gap-3  card">
              <h3 className="text-primary font-medium font-heading">
                Front-End Development
              </h3>
              <p className="text-darkWhite font-body">
                Building visually appealing, interactive front-end applications
                using HTML, CSS, JavaScript, and React. I prioritize delivering
                a smooth user experience, blending aesthetics with
                functionality.
              </p>
            </div>
            <div className="com-revcard col-span-2 md:col-span-1 flex flex-col gap-3  card">
              <h3 className="text-primary font-medium font-heading">
                UI/UX Design
              </h3>
              <p className="text-darkWhite font-body">
                Crafting intuitive and visually engaging interfaces that enhance
                user interaction. From wireframes to final design, I ensure
                every element serves the user experience effectively.
              </p>
            </div>
            <div className="com-revcard col-span-2 md:col-span-1 flex flex-col gap-3  card">
              <h3 className="text-primary font-medium font-heading">
                API Integration
              </h3>
              <p className="text-darkWhite font-body">
                Connecting applications to external APIs and ensuring smooth
                data handling for dynamic content. Skilled in using tools like
                Axios to create seamless integrations that bring additional
                functionality to your project.
              </p>
            </div>
            <div className="com-revcard col-span-2 md:col-span-1 flex flex-col gap-3  card">
              <h3 className="text-primary font-medium font-heading">
                Performance Optimization
              </h3>
              <p className="text-darkWhite font-body">
                CImproving website speed and efficiency through best practices
                in code optimization, reducing load times, and enhancing the
                overall user experience.
              </p>
            </div>
            <div className="com-revcard col-span-2 md:col-span-1 flex flex-col gap-3 card ">
              <h3 className="text-primary font-medium font-heading">
                Web Animations
              </h3>
              <p className="text-darkWhite font-body">
                Adding interactive animations with tools like Framer Motion to
                bring your website to life and make the user experience more
                engaging and enjoyable.
              </p>
            </div>
            <div className="com-revcard col-span-2 md:col-span-1 flex flex-col gap-3  card">
              <h3 className="text-primary font-medium font-heading">
                Website Maintenance
              </h3>
              <p className="text-darkWhite font-body">
                Offering ongoing support and updates to keep your website
                secure, up-to-date, and fully functional, with timely fixes and
                enhancements as needed.
              </p>
            </div>
            <div className="com-revcard col-span-2 md:col-span-1 flex flex-col gap-3 card ">
              <h3 className="text-primary font-medium font-heading">
                Testing and Debugging
              </h3>
              <p className="text-darkWhite font-body">
                Ensuring seamless functionality and optimal code quality by
                identifying and resolving issues efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 row3  ">
        <div className="com-card animate-late col-span-1  xl:col-span-1">
          <InterfaceComp
            title="credentials"
            about="MORE ABOUT ME"
            path="credentials"
            img={signature}
          />
        </div>
        <div className="com-card col-span-1 md:col-span-1 xl:col-span-2 overflow-hidden animate-late">
          <WorkTogether />
        </div>
        <div className="com-card h-full animate-late col-span-1 md:col-span-2 xl:col-span-1">
          <InterfaceConnect />
        </div>
      </div>
    </div>
  );
}
