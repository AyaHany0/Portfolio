import React from "react";
import Image from "next/image";
import star from "../../assets/star-2.png";

export default function Blog() {
  return (
    <div>
      <div className="text-center m-10">
        <div className="flex  justify-center gap-5 items-center p-10">
          <Image src={star} alt="" />
          <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold">
            COMING SOON
          </h1>
          <Image src={star} alt="" />
        </div>
      </div>
    </div>
  );
}
