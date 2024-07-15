import style from "./main.module.css";
import { getNews } from "../../api/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE } from "../../constants";
import useFetch from "../../helpers/hooks/useFetch";
import useFilters from "../../helpers/hooks/useFilters";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

export default function Main() {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading: isNewsLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <main className={style.main}>
      <LatestNews
        isLoading={isNewsLoading}
        banners={data && data.news}
      ></LatestNews>

      <NewsByFilters
        news={data?.news}
        filters={filters}
        changeFilter={changeFilter}
        isLoading={isNewsLoading}
      ></NewsByFilters>
    </main>
  );
}
