import { forwardRef } from "react";
import style from "./categories.module.css";

const Categories = forwardRef(
  ({ categories, setSelectedCategory, selectedCategory }, ref) => {
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
