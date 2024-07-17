import { getCategories } from "../../api/apiNews";
import useFetch from "../../helpers/hooks/useFetch";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import style from "./style.module.css";
import Slider from "../Slider/Slider";

export default function Filters({ filters, changeFilter }) {
  const { data: dataCategories, isLoading: isCategoriesLoading } =
    useFetch(getCategories);

  return (
    <div className={style.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => {
              changeFilter("category", category);
            }}
          ></Categories>
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => {
          changeFilter("keywords", keywords);
        }}
      />
    </div>
  );
}
