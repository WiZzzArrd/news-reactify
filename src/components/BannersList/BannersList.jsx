import withSkeleton from "../../helpers/hocs/withSkeleton";
import style from "./bannerslist.module.css";
import NewsBanner from "../NewsBanner/NewsBanner";

function BannersList({ banners }) {
  return (
    <ul className={style.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner}></NewsBanner>;
      })}
    </ul>
  );
}

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton;
