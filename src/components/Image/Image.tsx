import style from "./image.module.css";

interface Props {
  image: string;
}

export default function Image({ image }: Props) {
  return (
    <div className={style.wrapper}>
      {image ? <img className={style.image} src={image} alt='news' /> : null}
    </div>
  );
}
