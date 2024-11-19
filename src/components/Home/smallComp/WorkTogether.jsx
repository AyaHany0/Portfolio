import React from "react";
import icon from "../../../assets/icon2.png";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
export default function WorkTogether() {
  return (
    <Link to="/contact" className="flex flex-col justify-between group">
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
        <Button to={"/contact"} className="group" />
      </div>
    </Link>
  );
}
