import React from "react";
import style from "./search.module.css";

export default function Search({ keywords, setKeywords }) {
  const cleanValueHandler = () => {
    setKeywords("");
  };

  return (
    <div className={style.search}>
      <input
        type='text'
        value={keywords}
        className={style.input}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder='Javascript'
      ></input>

      <span onClick={cleanValueHandler} className={style.cancel}>
        ✖
      </span>
    </div>
  );
}
