import style from "./skeleton.module.css";

export default function Skeleton({
  count = 1,
  type = "banner",
  direction = "column",
}) {
  return (
    <>
      {count > 1 ? (
        <ul
          className={direction === "column" ? style.columnList : style.rowList}
        >
          {[...Array(count)].map((_, index) => {
            return (
              <li
                key={index}
                className={type === "banner" ? style.banner : style.item}
              ></li>
            );
          })}
        </ul>
      ) : (
        <li className={type === "banner" ? style.banner : style.item}></li>
      )}
    </>
  );
}
