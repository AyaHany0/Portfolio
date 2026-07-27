import React from "react";
import Image from "next/image";
import style from "./InfiniteScroll.module.css";
import star from "../../../assets/star-2.png";

const textBefore = "LATEST WORK AND ";
const textHighlighted = "FEATURED";
const repeatCount = 5;

// The marquee translates by -50%, which only loops seamlessly if the track is
// two identical halves. It used to be ten items with the separator omitted after
// the last one, so -50% landed mid-phrase and the loop visibly jumped. Building
// one half and rendering it twice makes the seam exact.
function MarqueeHalf({ prefix, hidden = false }) {
  return (
    <div className={style.marqueeHalf} aria-hidden={hidden || undefined}>
      {Array.from({ length: repeatCount }, (_, i) => (
        <React.Fragment key={`${prefix}-${i}`}>
          <span className="text-primary me-2">{textBefore}</span>
          <span className="text-white">{textHighlighted}</span>
          <span className={style.separator}>
            <Image src={star} alt="" className="w-100" />
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

export default function InfiniteScroll() {
  return (
    <div className={style.scrollContainer}>
      <div className={style.scrollContent}>
        <MarqueeHalf prefix="a" />
        <MarqueeHalf prefix="b" hidden />
      </div>
    </div>
  );
}
