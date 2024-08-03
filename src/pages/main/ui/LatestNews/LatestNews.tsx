import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import style from "./latestnews.module.css";
import { BannersList } from "@/widgets/news/index";

export default function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={style.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}
