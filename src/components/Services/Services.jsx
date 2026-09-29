import React from "react";
import Image from "next/image";

import {
  MdDashboard,
  MdDeveloperMode,
  MdOutlineDesignServices,
  MdTranslate,
} from "react-icons/md";
import { FaLaptopCode, FaMapMarkedAlt } from "react-icons/fa";
import { CiPlug1 } from "react-icons/ci";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsMagic } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
import star from "../../assets/star-2.png";
import WorkTogether from "../Home/smallComp/WorkTogether";
import InterfaceComp from "../Home/smallComp/InterfaceComp";
import signature from "../../assets/signature.png";
import Reveal from "../Reveal/Reveal";

import InterfaceConnect from "../Home/smallComp/InterfaceConnect";
const revealGroups = [
  {
    selector: ".icon",
    start: "top 80%",
    from: { opacity: 0, x: -50, scale: 0.8 },
    to: {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    },
  },
  {
    selector: ".headings",
    start: "top 80%",
    from: { opacity: 0, x: 50, scale: 0.8 },
    to: {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    },
  },
  {
    selector: ".card",
    start: "top 85%",
    from: { opacity: 0, y: 50, scale: 0.8 },
    to: {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "back.out",
      stagger: 0.3,
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

const services = [
  {
    icon: MdDeveloperMode,
    title: "Web Development",
    description:
      "Building complete, production-ready web applications with Next.js and React. I also understand how the back end works, so I integrate smoothly with any API team and speak their language when designing data flows.",
  },
  {
    icon: FaLaptopCode,
    title: "Front-End Development",
    description:
      "Developing fast, responsive interfaces with React, Next.js (App Router) and TypeScript. Typed, reusable components styled with Tailwind CSS, shadcn/ui, Radix UI or Material UI.",
  },
  {
    icon: MdDashboard,
    title: "Dashboards & Admin Panels",
    description:
      "Data-heavy dashboards, ERP and back-office web clients: interactive charts, filterable tables, calendars, and Excel and PDF exports that turn raw data into decisions.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "GIS Integration",
    description:
      "Integrating interactive maps into web apps with the ArcGIS Maps SDK and React Leaflet — map layers, markers, spatial data visualization and location-based features built right into your dashboards.",
  },
  {
    icon: CiPlug1,
    title: "API Integration & Real-Time",
    description:
      "Connecting apps to external services with Axios and TanStack Query — caching, retries and optimistic updates — plus live features like chat and notifications over SignalR and Socket.IO.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "UI/UX Design",
    description:
      "Crafting intuitive, visually engaging interfaces in Figma, from wireframes to a finished design system, making sure every element serves the user experience.",
  },
  {
    icon: MdTranslate,
    title: "Multilingual & RTL Websites",
    description:
      "Shipping Arabic and English experiences with next-intl and i18next, including full right-to-left layouts, localized routing and locale-aware formatting.",
  },
  {
    icon: BsMagic,
    title: "Web Animations",
    description:
      "Bringing websites to life with GSAP scroll-driven animations and Framer Motion transitions that make the experience more engaging without hurting performance.",
  },
  {
    icon: AiFillThunderbolt,
    title: "Performance Optimization",
    description:
      "Improving speed and Core Web Vitals through server rendering, code splitting, image optimization and smart data caching for faster load times and better SEO.",
  },
  {
    icon: GiMagnifyingGlass,
    title: "Testing & Maintenance",
    description:
      "Keeping projects reliable with Vitest and React Testing Library, Storybook-documented components, CI with GitHub Actions, and ongoing updates, fixes and enhancements.",
  },
];

export default function Services() {
  return (
    <Reveal
      groups={revealGroups}
      className="xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-md mx-auto p-4 space-y-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between">
        <div className="col-span-1 md:col-span-1 gap-5  ">
          <aside className="com-card col-span-1 lg:sticky lg:top-16 lg:h-fit">
            <ul className="flex flex-col justify-between  gap-10">
              {services.map(({ icon: Icon, title }) => (
                <li key={title} className=" flex justify-between gap-3">
                  <Icon className="text-3xl icon shrink-0" />
                  <p className="text-md font-medium headings text-end">
                    {title}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="col-span-1 md:col-span-2 gap-5 ">
          {/* heading */}
          <div className="text-center m-5">
            <div className="flex gap-3 justify-between items-center">
              <Image src={star} alt="" />
              <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold">
                MY OFFERINGS{" "}
              </h1>
              <Image src={star} alt="" />
            </div>
          </div>
          <div className="com-card col-span-1 grid grid-cols-2 gap-5">
            {services.map(({ title, description }) => (
              <div
                key={title}
                className="com-revcard col-span-2 md:col-span-1 flex flex-col gap-3 card"
              >
                <h2 className="text-primary font-medium font-heading">
                  {title}
                </h2>
                <p className="text-darkWhite font-body">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 row3  ">
        <div className="com-card animate-late col-span-1  xl:col-span-1 group">
          <InterfaceComp
            title="credentials"
            about="MORE ABOUT ME"
            path="credentials"
            img={signature}
          />
          <div className="shine-effect"></div>
        </div>
        <div className="com-card col-span-1 md:col-span-1 xl:col-span-2 overflow-hidden animate-late group">
          <WorkTogether />
          <div className="shine-effect"></div>
        </div>
        <div className="com-card h-full animate-late col-span-1 md:col-span-2 xl:col-span-1 group">
          <InterfaceConnect />
          <div className="shine-effect"></div>
        </div>
      </div>
    </Reveal>
  );
}
