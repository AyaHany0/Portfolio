import React from "react";
import Button from "../../Button/Button";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function InterfaceConnect() {
  return (
    <div className="flex flex-col justify-between space-y-6 shadow-2xl">
      <div className="bg-card-dark rounded-3xl flex justify-around lg:justify-between lg:gap-1 lg:px-3  gap-2  border-primary text-3xl border-[0.5px] p-5 ">
        <div className="border-[0.5px] shadow-2xl border-primary rounded-full p-5 cursor-pointer hover:bg-white hover:text-black transition-colors duration-500 lg:text-xl xl:text-3xl  ">
          <FaLinkedinIn />
        </div>
        <div className="border-[0.5px] shadow-2xl border-primary rounded-full p-5 text-3xl cursor-pointer hover:bg-white hover:text-black transition-colors duration-400 lg:text-xl xl:text-3xl">
          <FaGithub />
        </div>
      </div>
      <div className="flex gap-2 justify-between items-center ">
        <div className="flex flex-col gap-1">
          <p className="text-primary font-body text-sm"> STAY WITH ME</p>
          <h2 className="font-heading text-lg font-semibold capitalize">
            profiles
          </h2>
        </div>
        <Button to={`/contact`} />
      </div>
    </div>
  );
}
