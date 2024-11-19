import React from "react";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

export default function InterfaceComp({ img, path, about, title }) {
  const isExternal = path.startsWith("http");

  return isExternal ? (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between space-y-2"
    >
      <div className="flex justify-center">
        <img src={img} alt={about} className="w-full h-auto m-6 md:m-0" />
      </div>
      <div className="flex gap-2 justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-primary font-body">{about}</p>
          <h2 className="font-heading text-lg font-semibold capitalize">
            {title}
          </h2>
        </div>
        <Button className="group" />
      </div>
    </a>
  ) : (
    <Link
      to={`/${path}`}
      className="group flex flex-col justify-between space-y-2"
    >
      <div className="flex justify-center">
        <img src={img} alt={about} className="w-full h-auto m-6 md:m-0" />
      </div>
      <div className="flex gap-2 justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-primary font-body">{about}</p>
          <h2 className="font-heading text-lg font-semibold capitalize">
            {title}
          </h2>
        </div>
        <Button className="group" />
      </div>
    </Link>
  );
}
