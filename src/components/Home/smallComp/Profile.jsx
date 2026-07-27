import React from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../../../assets/profile.webp";
import Button from "../../Button/Button";

export default function Profile() {
  return (
    <Link
      href="/about"
      className="flex justify-between items-center gap-5 w-full  group"
    >
      <div className="bg-card-blue text-center rounded-ss-3xl rounded-ee-3xl overflow-hidden ">
        <Image src={profile} alt="Aya Hany" priority />
      </div>
      <div className="flex flex-col gap-3">
        <p className="uppercase text-primary font-body font-medium tracking-wide">
          a Web Developer
        </p>
        <h1 className="font-heading  text-3xl font-medium tracking-wide ">
          Aya Hany
        </h1>
        <p className="text-primary font-body text-md  tracking-wide">
          I&apos;m a web Developer based in Egypt
        </p>
        <span className="self-end group">
          <Button />
        </span>
      </div>
    </Link>
  );
}
