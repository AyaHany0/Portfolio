import React, { useEffect, useRef } from "react";
import InterfaceComp from "../Home/smallComp/InterfaceComp";
import mealify from "../../assets/projects/mealify.png";
import VivaDecor from "../../assets/projects/vivadecor.png";
import blooming from "../../assets/projects/blooming.png";
import yummy from "../../assets/projects/yummy.png";
import todolist from "../../assets/projects/todolist.png";
import solar from "../../assets/projects/solar.png";
import dinafarms from "../../assets/projects/dinafarms.png";
import john from "../../assets/projects/john.png";
import bazel from "../../assets/projects/bazel.png";
import games from "../../assets/projects/games.png";
import weather from "../../assets/projects/weather.png";
import simon from "../../assets/projects/simon.png";
import freshcart from "../../assets/projects/freshcart.png";
import mathil from "../../assets/projects/mathil.png";
import sjc from "../../assets/projects/sjc.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Works() {
  const containerRef = useRef(null); // Reference to the parent container

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = containerRef.current.querySelectorAll(".animate ");
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 200,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <div
      className="xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-md mx-auto p-4 "
      ref={containerRef}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 animate">
        <div className="col-span-1 space-y-5 ">
          <div className="com-card  hover:scale-105 transition-all duration-150 ">
            <InterfaceComp
              about="Web Development"
              title="sjctanseiq"
              path="https://sjctanseiq.com"
              img={sjc}
            />
          </div>
          <div className="com-card  hover:scale-105 transition-all duration-150 ">
            <InterfaceComp
              title="Blooming"
              about="Web Development"
              path="https://ayahany0.github.io/Blooming/"
              img={blooming}
            />
          </div>
          <div className="com-card  hover:scale-105 transition-all duration-150 ">
            <InterfaceComp
              title="Solar Company"
              about="Web Development"
              path="https://ayahany0.github.io/SolarCompany/"
              img={solar}
            />
          </div>
          <div className="com-card  hover:scale-105 transition-all duration-150 ">
            <InterfaceComp
              title="Games"
              about="Web Development"
              path="https://ayahany0.github.io/Games"
              img={games}
            />
          </div>
          <div className="  com-card  hover:scale-105 transition-all duration-150 ">
            <InterfaceComp
              title="Say Simon"
              about="Web Development"
              path="https://ayahany0.github.io/Simon-Game"
              img={simon}
            />
          </div>
        </div>
        <div className="gap-5 col-span-2 row-span-1 grid grid-cols-1 lg:grid-cols-2 ">
          <div className="com-card  hover:scale-105 transition-all duration-150 ">
            <InterfaceComp
              title="Mathil"
              about="Web Development"
              path="https://testing.mathil.sa/"
              img={mathil}
            />
          </div>
          <div className="justify-between com-card  hover:scale-105 transition-all duration-150 ">
            <InterfaceComp
              about="Web Development"
              title="Fresh Cart"
              path="https://fresh-cart-chi-nine.vercel.app/"
              img={freshcart}
            />
          </div>
          <div className="com-card  hover:scale-105 transition-all duration-150 ">
            <InterfaceComp
              about="Web Development"
              title="VivaDecor"
              path="https://ayahany0.github.io/InteriorDesign"
              img={VivaDecor}
            />
          </div>

          <div className="com-card hover:scale-105 transition-all duration-150 ">
            <InterfaceComp
              about="Web Development"
              title="VivaDecor"
              path="https://ayahany0.github.io/Yummy"
              img={yummy}
            />
          </div>
          <div className="com-card  hover:scale-105 transition-all duration-150 ">
            <InterfaceComp
              about="Web Development"
              title="To Do List"
              path="https://ayahany0.github.io/ToDoList"
              img={todolist}
            />
          </div>
          <div className="com-card  hover:scale-105 transition-all duration-150 ">
            <InterfaceComp
              about="Web Development"
              title="Dr.John Watson"
              path="https://ayahany0.github.io/Dr.JohnWatson"
              img={john}
            />
          </div>
          <div className="com-card  hover:scale-105 transition-all duration-150 ">
            <InterfaceComp
              about="Web Development"
              title="Dina Farms"
              path="https://ayahany0.github.io/ImageSlider/"
              img={dinafarms}
            />
          </div>
          <div className="com-card  hover:scale-105 transition-all duration-150 ">
            <InterfaceComp
              about="Web Development"
              title="bazel."
              path="https://ayahany0.github.io/bazel"
              img={bazel}
            />
          </div>
          <div className="com-card  hover:scale-105 transition-all duration-150 ">
            <InterfaceComp
              about="Web Development"
              title="VivaDecor"
              path="https://ayahany0.github.io/Weather"
              img={weather}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
