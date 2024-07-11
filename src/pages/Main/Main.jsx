import React, { useEffect, useState } from "react";
import style from "./main.module.css";
import { getNews } from "../../api/apiNews";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";

export default function Main() {
  const [news, setNews] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className={style.main}>
      {news?.length > 0 && <NewsBanner item={news[0]}></NewsBanner>}

      {news?.length > 0 && <NewsList news={news}></NewsList>}
    </main>
  );
}
