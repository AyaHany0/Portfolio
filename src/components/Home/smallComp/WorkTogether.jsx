import React from "react";
import Image from "next/image";
import Link from "next/link";
import icon from "../../../assets/icon2.png";
import Button from "../../Button/Button";

export default function WorkTogether() {
  return (
    <Link href="/contact" className="flex flex-col justify-between group">
      <div className="-mt-6 mb-6">
        <Image src={icon} alt="" />
      </div>
      <div className="flex justify-between items-end mb-4">
        <div className="text-4xl font-semibold ">
          <p>Let&apos;s</p>
          <p>
            Work <span className="text-secondary">together.</span>
          </p>
        </div>
        <Button className="group" />
      </div>
    </Link>
  );
}
