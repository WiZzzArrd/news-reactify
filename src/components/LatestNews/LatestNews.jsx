import { getLatestNews } from "../../api/apiNews";
import useFetch from "../../helpers/hooks/useFetch";
import BannersListWithSkeleton from "../BannersList/BannersList";
import style from "./latestnews.module.css";

export default function LatestNews() {
  const { data, isLoading } = useFetch(getLatestNews);

  return (
    <section className={style.section}>
      <BannersListWithSkeleton
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
}
