import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import style from "./style.module.css";
import Slider from "../Slider/Slider";
import { IFilters } from "../../interfaces/interfaces";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

interface Props {
  filters: IFilters;
}

export default function Filters({ filters }: Props) {
  const { data: dataCategories } = useGetCategoriesQuery(null);
  const dispatch = useAppDispatch();

  return (
    <div className={style.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => {
              dispatch(setFilters({ key: "category", value: category }));
            }}
          ></Categories>
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => {
          dispatch(setFilters({ key: "keywords", value: keywords }));
        }}
      />
    </div>
  );
}
