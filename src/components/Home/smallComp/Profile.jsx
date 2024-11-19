import React from "react";
import profile from "../../../assets/profile.webp";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <Link
      to="/about"
      className="flex justify-between items-center gap-5 w-full  group"
    >
      <div className="bg-card-blue text-center rounded-ss-3xl rounded-ee-3xl overflow-hidden ">
        <img src={profile} alt="Aya's Photo" />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="uppercase text-primary font-body font-medium tracking-wide">
          a Web Developer
        </h1>
        <h2 className="font-heading  text-3xl font-medium tracking-wide ">
          Aya Hany
        </h2>
        <p className="text-primary font-body text-md  tracking-wide">
          I'm a web Developer based in Egypt
        </p>
        <span className="self-end group">
          <Button to="/about" />
        </span>
      </div>
    </Link>
  );
}
