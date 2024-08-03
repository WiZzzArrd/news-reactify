import withSkeleton from "@/shared/hocs/withSkeleton";
import style from "./newslist.module.css";
import { INews, NewsItem } from "@/entities/news";

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
