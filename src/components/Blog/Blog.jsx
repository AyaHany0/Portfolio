import React from "react";
import star from "../../assets/star-2.png";
export default function Blog() {
  return (
    <div>
      <div className="text-center m-10">
        <div className="flex  justify-center gap-5 items-center p-10">
          <img src={star} alt="star" />
          <h2 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl transition-all duration-100  ease-in-out font-semibold">
            COMING SOON
          </h2>
          <img src={star} alt="star" />
        </div>
      </div>
    </div>
  );
}
