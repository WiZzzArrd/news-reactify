import { useAppDispatch } from "@/app/appStore";
import Categories from "@/features/category/ui/Categories/Categories";
import Search from "@/features/search/ui/Search/Search";
import { setFilters } from "@/entities/news/model/newsSlice";
import style from "./style.module.css";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import { Slider } from "@/features/slider";
import { IFilters } from "@/shared/interfaces";

interface Props {
  filters: IFilters;
}

export default function NewsFilters({ filters }: Props) {
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
