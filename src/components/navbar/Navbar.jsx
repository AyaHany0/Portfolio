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
    setMenuOpen(false);
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

        <button
          type="button"
          className="md:hidden cursor-pointer p-3"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
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
        </button>
      </div>

      {/* Menu: animates height/opacity on mobile; `md:contents` drops the
          wrappers on desktop so links and button stay direct flex children */}
      <div
        className={`grid w-full md:contents transition-all duration-500 ease-in-out ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100 visible"
            : "grid-rows-[0fr] opacity-0 invisible md:opacity-100 md:visible"
        }`}
      >
        <div
          className={`overflow-hidden md:contents flex flex-col items-center transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-y-0" : "-translate-y-3 md:translate-y-0"
          }`}
        >
          <div className="w-full md:flex md:items-center justify-between md:w-auto">
            {/* Menu Items */}
            <ul className="flex flex-col md:flex-row items-center  md:bg-transparent shadow-md md:shadow-none gap-4 w-full md:w-auto md:ml-4">
              {links.map(({ href, label }) => (
                <li key={href} className="p-4 text-lg text-primary cursor-pointer">
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={pathname === href ? "active" : ""}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 mb-2 md:my-0 md:ml-8">
            <button
              onClick={handleNavigation}
              className="px-6 py-2 cursor-pointer text-white bg-subprimary hover:bg-white hover:text-subprimary rounded-lg font-medium transition-colors duration-300"
            >
              Let&apos;s talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
