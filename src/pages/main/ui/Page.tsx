import style from "./style.module.css";
import NewsByFilters from "./NewsByFilters/NewsByFilters";
import LatestNews from "./LatestNews/LatestNews";

export default function MainPage() {
  return (
    <main className={style.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
}
