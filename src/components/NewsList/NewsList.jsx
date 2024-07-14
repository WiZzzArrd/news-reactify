import React from "react";
import style from "./newslist.module.css";
import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../../helpers/hocs/withSkeleton";

function NewsList({ news }) {
  return (
    <ul className={style.list}>
      {news.map((i) => {
        return <NewsItem key={i.id} item={i}></NewsItem>;
      })}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
