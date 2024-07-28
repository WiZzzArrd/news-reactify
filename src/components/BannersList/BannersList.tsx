import withSkeleton from "../../helpers/hocs/withSkeleton";
import style from "./bannerslist.module.css";
import NewsBanner from "../NewsBanner/NewsBanner";
import { INews } from "../../interfaces/interfaces";

interface Props {
  banners?: INews[] | null;
}

function BannersList({ banners }: Props) {
  return (
    <ul className={style.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner}></NewsBanner>;
      })}
    </ul>
  );
}

const BannersListWithSkeleton = withSkeleton<Props>(
  BannersList,
  "banner",
  10,
  "row"
);

export default BannersListWithSkeleton;
