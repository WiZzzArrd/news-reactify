import style from "./main.module.css";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

export default function Main() {
  return (
    <main className={style.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
}
