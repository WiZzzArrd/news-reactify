import { getLatestNews } from "../../api/apiNews";
import useFetch from "../../helpers/hooks/useFetch";
import { NewsApiResponse } from "../../interfaces/interfaces";
import BannersListWithSkeleton from "../BannersList/BannersList";
import style from "./latestnews.module.css";

export default function LatestNews() {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={style.section}>
      <BannersListWithSkeleton
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
}
