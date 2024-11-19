import React from "react";
import icon from "../../../assets/icon2.png";
import Button from "../../Button/Button";
export default function WorkTogether() {
  return (
    <div className="flex flex-col justify-between">
      <div className="-mt-6 mb-6">
        <img src={icon} alt="star" />
      </div>
      <div className="flex justify-between items-end mb-4">
        <div className="text-4xl font-semibold ">
          <h3>Let's</h3>
          <p>
            Work <span className="text-secondary">together.</span>
          </p>
        </div>
        <Button to={"/contact"} />
      </div>
    </div>
  );
}
