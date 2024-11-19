import React from "react";
import style from "./InfiniteScroll.module.css";
import star from "../../../assets/star-2.png";

export default function InfiniteScroll() {
  const textBefore = "LATEST WORK AND ";
  const textHighlighted = "FEATURED";
  const repeatCount = 10;

  const items = [];
  for (let i = 0; i < repeatCount; i++) {
    items.push(
      <React.Fragment key={`text-${i}`}>
        <span className="text-primary me-2">{textBefore}</span>
        <span className="text-white">{textHighlighted}</span>
        {i < repeatCount - 1 && (
          <span className={style.separator}>
            <img src={star} alt="star" className="w-100" />
          </span>
        )}
      </React.Fragment>
    );
  }

  return (
    <div className={style.scrollContainer}>
      <div className={style.scrollContent}>{items}</div>
    </div>
  );
}
