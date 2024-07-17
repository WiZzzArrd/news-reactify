import React, { useRef } from "react";
import style from "./style.module.css";

export default function Slider({ children, step = 150 }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={style.slider}>
      <button onClick={scrollLeft} className={style.arrow}>
        {"<"}
      </button>

      {React.cloneElement(children, { ref: sliderRef })}

      <button onClick={scrollRight} className={style.arrow}>
        {">"}
      </button>
    </div>
  );
}
