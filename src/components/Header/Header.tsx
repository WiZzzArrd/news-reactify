import React from "react";
import style from "./header.module.css";
import { formatDate } from "../../helpers/formatDate";

export default function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.title}>NEWS REACTIFY</h1>
      <p className={style.date}>{formatDate(new Date())}</p>
    </header>
  );
}
