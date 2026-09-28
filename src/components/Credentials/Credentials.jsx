import React from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../../assets/profile.webp";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import CopyButton from "./CopyButton";
import Reveal from "../Reveal/Reveal";

// These used to be built in `forEach` loops, one ScrollTrigger per element: 2 + 7
// + 11 plus the profile image came to 25 instances on this single page, and the
// paragraph group used `scrub: true` so it recomputed on every scroll frame. That
// was the forced-reflow source. One trigger per group, staggered, looks the same.
const revealGroups = [
  {
    selector: ".icon",
    start: "top 85%",
    from: { x: -100, opacity: 0, rotation: 0, borderRadius: 0 },
    to: {
      x: 0,
      opacity: 1,
      rotation: 360,
      borderRadius: "50%",
      duration: 1,
      stagger: 0.2,
    },
  },
  {
    selector: ".header",
    start: "top 85%",
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 },
  },
  {
    selector: ".paragraph",
    start: "top 90%",
    from: { opacity: 0, scale: 0.8, x: 50 },
    to: {
      opacity: 1,
      scale: 1,
      x: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.3,
    },
  },
  {
    selector: ".skill",
    start: "top 90%",
    from: { scale: 0.8, opacity: 0 },
    to: {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
      stagger: 0.08,
    },
  },
];

export default function Credentials() {
  const phone = "+0201090944979";
  const email = "ayah28603@gmail.com";

  return (
    <Reveal
      groups={revealGroups}
      className="xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-md mx-auto p-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[350px_auto] gap-10">
        <aside className="card bg-card-dark w-full shadow-2xl flex flex-col items-center rounded-3xl p-10 border-border border-[0.5px] lg:sticky lg:top-10 lg:h-fit space-y-8">
          <div className="bg-card-blue rounded-3xl">
            <Image src={profile} alt="Aya Hany" priority />
          </div>
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-3xl font-bold font-heading">Aya Hany</h1>
            <p className="text-primary font-body">@ayah28603</p>
          </div>
          <div>
            <ul className="flex gap-3 justify-between items-center">
              <li className="icon p-4 bg-card-reverseDark  text-2xl hover:text-black hover:bg-light transition-colors duration-300">
                <a
                  href="https://github.com/AyaHany0"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Aya Hany on GitHub, opens in a new tab"
                >
                  <FaGithub aria-hidden="true" />
                </a>
              </li>
              <li className=" icon p-4 bg-card-reverseDark rounded-full text-2xl hover:text-black hover:bg-light transition-colors duration-300">
                <a
                  href="https://www.linkedin.com/in/aya-hany-web-developer"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Aya Hany on LinkedIn, opens in a new tab"
                >
                  <FaLinkedin aria-hidden="true" />
                </a>
              </li>
              <li className="icon  p-4 bg-card-reverseDark rounded-full text-2xl cursor-pointer hover:text-black hover:bg-light transition-colors duration-300">
                <CopyButton
                  value={phone}
                  label="Copy phone number"
                  copiedLabel="Phone number copied"
                >
                  <FaPhoneAlt aria-hidden="true" />
                </CopyButton>
              </li>
              <li className=" icon p-4 bg-card-reverseDark rounded-full text-2xl cursor-pointer hover:text-black hover:bg-light transition-colors duration-300">
                <CopyButton
                  value={email}
                  label="Copy email address"
                  copiedLabel="Email address copied"
                >
                  <SiGmail aria-hidden="true" />
                </CopyButton>
              </li>
            </ul>
          </div>
          <Link
            href="/contact"
            className="font-heading text-xl bg-subprimary p-3 rounded-full w-full text-center hover:text-black hover:bg-primary transition-colors duration-300"
          >
            Contact Me
          </Link>
        </aside>

        <div className="flex flex-col gap-20">
          <div className="about flex flex-col gap-5  ">
            <h2 className="font-heading font-semibold text-2xl header">
              About Me
            </h2>
            <p className="text-darkWhite font-medium  ">
              I&apos;m Aya Hany, a passionate front-end developer from Egypt with
              expertise in building visually engaging, user-focused web
              applications. With a strong foundation in HTML, CSS, JavaScript,
              and React, I specialize in creating responsive, functional designs
              that enhance user experience. My journey into programming has
              equipped me with a diverse skill set and a commitment to
              continuous learning. Each project is an opportunity for me to
              blend creativity with technical skills, ensuring high-quality
              results tailored to client needs.
            </p>
          </div>
          <div className="EXPERIENCE flex flex-col gap-5 ">
            <h2 className="font-heading font-semibold text-2xl header">
              EXPERIENCE
            </h2>
            <div className="flex flex-col gap-3 ">
              <p className="date text-primary "> 2023 - Present</p>
              <h3 className="job-title text-secondary font-medium text-xl">
                Front-End Developer
              </h3>
              <p className="text-primary">Freelance | Egypt</p>
              <p className="text-darkWhite">
                Project-Based Work: Developed a variety of web projects across
                industries, focusing on delivering high-quality, responsive, and
                engaging user experiences.
              </p>
            </div>
          </div>
          <div className="EDUCATION flex flex-col gap-5 ">
            <h2
              className="font-heading font-semibold text-2xl header
            "
            >
              EDUCATION
            </h2>
            <div>
              <div className="flex flex-col gap-3  ">
                <p className="date text-primary paragraph">
                  {" "}
                  2018/08 – 2022/05
                </p>
                <h3 className="job-title text-secondary font-medium text-xl paragraph">
                  Bachelor of Education, Computer Science Department
                </h3>
                <p className="text-primary paragraph">
                  Kafr El-Sheikh University
                </p>
                <p className="text-darkWhite paragraph">
                  During my time at Kafr El Sheikh University, I developed a
                  strong foundation in computer education, learning the basics
                  of programming, educational technology, and digital tools. My
                  coursework provided valuable insights into the principles of
                  software and user experience, which sparked my passion for
                  front-end development and paved the way for my transition into
                  the tech industry. This background has been instrumental in
                  shaping my technical and creative approach to web development.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 paragraph">
              <p className="date text-primary "> 2023/12 – 2024/05</p>
              <h3 className="job-title text-secondary font-medium text-xl  ">
                Programming Fundamentals diploma
              </h3>
              <p className="text-primary  "> Route IT training center</p>
              <p className="text-darkWhite ">
                Through my Fundamentals of Programming diploma, I built a solid
                understanding of core programming concepts, including
                algorithms, data structures, and problem-solving techniques.
                This diploma provided me with essential skills in coding logic
                and syntax, laying the groundwork for my journey into front-end
                development. It equipped me with a structured approach to coding
                and the confidence to explore more advanced topics and
                technologies.
              </p>
            </div>
            <div className="flex flex-col gap-3 paragraph ">
              <p className="date text-primary  "> 2024/03 – 2024/08</p>
              <h3 className="job-title text-secondary font-medium text-xl  ">
                Front-End Development Diploma
              </h3>
              <p className="text-primary  "> Route IT training center</p>
              <p className="text-darkWhite  ">
                In my Front-End Development diploma, I gained comprehensive
                training in building interactive, user-friendly web
                applications. The program covered essential skills, including
                HTML, CSS, JavaScript, and popular frameworks like React. I
                learned to create responsive designs, implement dynamic
                functionality, and focus on delivering an optimal user
                experience. This diploma solidified my expertise in front-end
                technologies and gave me hands-on experience with real-world
                projects, preparing me to bring creative and functional
                solutions to each development challenge.
              </p>
            </div>
            <div className="flex flex-col gap-3 paragraph">
              <p className="date text-primary "> 2024/09 – Present</p>
              <h3 className="job-title text-secondary font-medium text-xl ">
                Front-End Web Developer Nanodegree – Udacity
              </h3>
              <p className="text-primary "> Udacity </p>
              <p className="text-darkWhite ">
                This Nanodegree program provided me with advanced training in
                front-end development, emphasizing real-world projects and
                industry best practices. Through hands-on experience, I honed my
                skills in HTML, CSS, JavaScript, and React, while learning to
                build responsive, interactive web applications. The program also
                introduced me to modern tools and workflows, enhancing my
                abilities in debugging, code optimization, and project
                management. This experience has been instrumental in shaping my
                approach to front-end development and deepening my technical
                expertise.
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-5 ">
            <h2 className="font-heading font-semibold text-2xl  ">SKILLS</h2>
            <div className="flex flex-col gap-3 ">
              <h3 className="job-title text-secondary font-medium text-xl  ">
                Front-End Development
              </h3>
              <ul>
                <li className="text-darkWhite skill">
                  <span className="text-white font-semibold font-heading me-2 text-lg">
                    Languages:
                  </span>
                  HTML, CSS, JavaScript.
                  <span className="text-primary ms-1">(Advanced)</span>
                </li>
                <li className="text-darkWhite skill">
                  <span className="text-white font-semibold font-heading me-2 text-lg">
                    Frameworks & Libraries:
                  </span>
                  React<span className="text-primary ms-1">(Advanced)</span>,
                  Next.js
                  <span className="text-primary ms-1">(Intermediate)</span>,
                  Tailwind CSS
                  <span className="text-primary ms-1">(Advanced)</span>,
                  Bootstrap
                  <span className="text-primary ms-1">(Advanced)</span>, Framer
                  Motion
                  <span className="text-primary ms-1">(Intermediate)</span>
                </li>
                <li className="text-darkWhite skill">
                  <span className="text-white font-semibold font-heading me-2 text-lg">
                    APIs & State Management:
                  </span>
                  Axios<span className="text-primary ms-2">(Advanced)</span>,
                  React Query
                  <span className="text-primary ms-1">(Advanced)</span>, Context
                  API
                  <span className="text-primary ms-1">(Advanced)</span>, Redux &
                  Redux Toolkit
                  <span className="text-primary ms-1">(Intermediate)</span>
                </li>
              </ul>
              <h3 className="job-title text-secondary font-medium text-xl ">
                Design & UI
              </h3>
              <ul>
                <li className="text-darkWhite skill">
                  <span className="text-white font-semibold font-heading me-2 text-lg">
                    Tools:
                  </span>
                  Figma
                  <span className="text-primary ms-1">(Advanced)</span>
                  Adobe XD
                  <span className="text-primary ms-1">(Intermediate)</span>
                </li>
                <li className="text-darkWhite skill">
                  <span className="text-white font-semibold font-heading me-2 text-lg">
                    Principles:
                  </span>
                  Responsive Design, User-Centered Design, Accessibility
                  <span className="text-primary ms-1">(Proficient)</span>
                </li>
              </ul>
              <h3 className="job-title text-secondary font-medium text-xl ">
                Validation & Form Handling
              </h3>
              <ul>
                <li className="text-darkWhite skill">
                  <span className="text-white font-semibold font-heading me-2 text-lg ">
                    Libraries:
                  </span>
                  Formik, Yup
                  <span className="text-primary ms-1">(Intermediate)</span>
                </li>
              </ul>
              <h3 className="job-title text-secondary font-medium text-xl ">
                Version Control & Collaboration
              </h3>
              <ul>
                <li className="text-darkWhite skill">
                  <span className="text-white font-semibold font-heading me-2 text-lg">
                    Tools:
                  </span>
                  Git, GitHub
                  <span className="text-primary ms-1">(advanced)</span>, Jira
                  <span className="text-primary ms-1">(Basic)</span>
                </li>
              </ul>
              <h3 className="job-title text-secondary font-medium text-xl ">
                Animations & Effects:
              </h3>
              <ul>
                <li className="text-darkWhite skill">
                  <span className="text-white font-semibold font-heading me-2 text-lg">
                    Libraries:
                  </span>
                  Framer Motion, Typewriter Effect, React Simple Typewriter
                  <span className="text-primary ms-1">(Intermediate)</span>
                </li>
              </ul>
              <h3 className="job-title text-secondary font-medium text-xl">
                Additional Skills:
              </h3>
              <ul>
                <li className="text-darkWhite skill">
                  <span className="text-white font-semibold font-heading me-2 text-lg">
                    Problem Solving & Debugging:
                  </span>
                  Strong analytical skills
                </li>
                <li className="text-darkWhite skill">
                  <span className="text-white font-semibold font-heading me-2 text-lg">
                    Code Optimization:
                  </span>
                  Focused on writing clean, reusable code
                </li>
                <li className="text-darkWhite skill">
                  <span className="text-white font-semibold font-heading me-2 text-lg">
                    Continuous Learning:
                  </span>
                  Engaged in ongoing learning via Udacity, Udemy, and other
                  platforms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
