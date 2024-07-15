import { getCategories } from "../../api/apiNews";
import useFetch from "../../helpers/hooks/useFetch";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import style from "./style.module.css";

export default function Filters({ filters, changeFilter }) {
  const { data: dataCategories, isLoading: isCategoriesLoading } =
    useFetch(getCategories);

  return (
    <div className={style.filters}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => {
            changeFilter("category", category);
          }}
        ></Categories>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => {
          changeFilter("keywords", keywords);
        }}
      ></Search>
    </div>
  );
}
