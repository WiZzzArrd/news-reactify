import { ForwardedRef, forwardRef } from "react";
import style from "./categories.module.css";
import { CategoriesType } from "../../interfaces/interfaces";

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={style.categories}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? style.active : style.item}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              disabled={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category ? style.active : style.item
              }
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);

export default Categories;

Categories.displayName = "Categories";
