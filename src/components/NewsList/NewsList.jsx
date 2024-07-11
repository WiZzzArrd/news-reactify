import React from "react";
import style from "./newslist.module.css";
import NewsItem from "../NewsItem/NewsItem";

export default function NewsList({ news }) {
  return (
    <ul className={style.list}>
      {news.map((i) => {
        return <NewsItem key={i.id} item={i}></NewsItem>;
      })}
    </ul>
  );
}
