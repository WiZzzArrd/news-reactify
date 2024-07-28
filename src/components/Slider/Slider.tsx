import React, { useRef } from "react";
import style from "./style.module.css";

interface Props {
  children: React.ReactElement;
  step: number | undefined;
}

export default function Slider({ children, step = 150 }: Props) {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
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
