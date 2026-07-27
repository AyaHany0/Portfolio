import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className=" text-center p-4 text-white font-medium md:text-base text-sm mt-10 flex flex-col space-y-10">
      <div className="flex flex-col justify-between items-center space-y-10">
        <Image src={logo} alt="Aya's logo" className="w-[100px] h-auto" />
        <ul className="text-primary flex justify-between items-center space-x-10">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/works">WORKS</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      <p className="text-sm md:text-base text-primary">
        &copy; {new Date().getFullYear()} All rights reserved by
        <span className="text-secondary ms-1">Aya Hany</span>
      </p>
    </footer>
  );
}
