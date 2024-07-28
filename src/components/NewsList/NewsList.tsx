import style from "./newslist.module.css";
import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces/interfaces";

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={style.list}>
      {news?.map((i) => {
        return <NewsItem key={i.id} item={i}></NewsItem>;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);

export default NewsListWithSkeleton;
