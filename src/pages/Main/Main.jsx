import React, { useEffect, useState } from "react";
import style from "./main.module.css";
import { getNews } from "../../api/apiNews";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";

export default function Main() {
  const [news, setNews] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews();
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className={style.main}>
      {news?.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]}></NewsBanner>
      ) : (
        <Skeleton count={1} type='banner'></Skeleton>
      )}

      {news?.length > 0 && !isLoading ? (
        <NewsList news={news}></NewsList>
      ) : (
        <Skeleton count={10} type='item'></Skeleton>
      )}
    </main>
  );
}
