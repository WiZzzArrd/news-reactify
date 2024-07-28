import style from "./newsitem.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { INews } from "../../interfaces/interfaces";

interface Props {
  item: INews;
}

export default function NewsItem({ item }: Props) {
  return (
    <li className={style.item}>
      <div
        className={style.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>

      <div className={style.info}>
        <h3 className={style.title}>{item.title}</h3>
        <p className={style.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
}
