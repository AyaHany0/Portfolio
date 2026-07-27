"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../assets/logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = () => {
    router.push("/contact");
  };

  return (
    <nav className="xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-md mx-auto flex flex-col md:flex-row items-center p-3 justify-between font-heading">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href="/">
          <Image
            src={logo}
            alt="Aya's Portfolio"
            className="w-[100px] h-auto"
            priority
          />
        </Link>

        <div className="md:hidden cursor-pointer p-3" onClick={toggleMenu}>
          {/* Menu Icon */}
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white mt-1 transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </div>

      {/* Menu */}
      <div
        className={`w-full md:flex md:items-center justify-between md:w-auto transition-transform duration-300 ${
          menuOpen ? "block" : "hidden md:block"
        }`}
      >
        {/* Menu Items */}
        <ul className="flex flex-col md:flex-row items-center  md:bg-transparent shadow-md md:shadow-none gap-4 w-full md:w-auto md:ml-4">
          {links.map(({ href, label }) => (
            <li key={href} className="p-4 text-lg text-primary cursor-pointer">
              <Link href={href} className={pathname === href ? "active" : ""}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`mt-4 md:mt-0 md:ml-8 ${
          menuOpen ? "block" : "hidden md:block"
        }`}
      >
        <button
          onClick={handleNavigation}
          className="px-6 py-2 cursor-pointer text-white bg-subprimary hover:bg-white hover:text-subprimary rounded-lg font-medium transition-colors duration-300"
        >
          Let&apos;s talk
        </button>
      </div>
    </nav>
  );
}
