import style from "./banner.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../Image/Image";
import { INews } from "../../interfaces/interfaces";

interface Props {
  item: INews;
}

function NewsBanner({ item }: Props) {
  return (
    <div className={style.banner}>
      <Image image={item.image}></Image>
      <h3 className={style.title}>{item.title}</h3>
      <p className={style.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
}

export default NewsBanner;
