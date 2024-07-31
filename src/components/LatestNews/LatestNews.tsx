import { useGetLatestNewsQuery } from "../../store/services/newsApi";
import BannersListWithSkeleton from "../BannersList/BannersList";
import style from "./latestnews.module.css";

export default function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={style.section}>
      <BannersListWithSkeleton
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
}
