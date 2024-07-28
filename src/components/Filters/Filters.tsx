import { getCategories } from "../../api/apiNews";
import useFetch from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import style from "./style.module.css";
import Slider from "../Slider/Slider";
import { CategoriesApiResponse, IFilters } from "../../interfaces/interfaces";

interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
}

export default function Filters({ filters, changeFilter }: Props) {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories
  );

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
