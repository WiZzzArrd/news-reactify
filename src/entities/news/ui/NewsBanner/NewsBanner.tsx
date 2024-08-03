import style from "./banner.module.css";
import { formatTimeAgo } from "../../../../shared/helpers/formatTimeAgo";
import Image from "../../../../shared/ui/Image/Image";
import { INews } from "../../model/types";

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
