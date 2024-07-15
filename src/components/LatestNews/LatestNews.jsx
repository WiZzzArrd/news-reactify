import BannersListWithSkeleton from "../BannersList/BannersList";
import style from "./latestnews.module.css";

export default function LatestNews({ banners, isLoading }) {
  return (
    <section className={style.section}>
      <BannersListWithSkeleton banners={banners} isLoading={isLoading} />
    </section>
  );
}
