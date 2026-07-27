import React from "react";
import { BsMagic } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
import { MdDashboard, MdOutlineDeveloperMode } from "react-icons/md";
import Button from "../../Button/Button";
import Link from "next/link";

export default function InterfaceServices() {
  return (
    <Link
      href={"/services"}
      className="group flex flex-col justify-between space-y-2 "
    >
      <div aria-hidden="true">
        <ul className="flex gap-3 text-5xl justify-around my-8 mx-2 items-center">
          <li>
            <MdOutlineDeveloperMode />
          </li>
          <li>
            <BsMagic />
          </li>
          <li>
            <MdDashboard />
          </li>
          <li>
            <GiMagnifyingGlass />
          </li>
        </ul>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-primary font-body">SPECIALIZATION</p>
          <h2 className="font-heading text-lg font-semibold capitalize">
            service offering
          </h2>
        </div>
        <Button className="group-hover:brightness-125 transition-transform duration-300" />
      </div>
    </Link>
  );
}
