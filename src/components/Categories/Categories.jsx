import style from "./categories.module.css";

export default function Categories({
  categories,
  setSelectedCategory,
  selectedCategory,
}) {
  console.log(categories, selectedCategory);

  return (
    <div className={style.categories}>
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
