import React from "react";
import style from "./image.module.css";

export default function Image({ image }) {
  return (
    <div className={style.wrapper}>
      {image ? <img className={style.image} src={image} alt='news' /> : null}
    </div>
  );
}
