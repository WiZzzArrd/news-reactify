import style from "./categories.module.css";

export default function Categories({
  categories,
  setSelectedCategory,
  selectedCategory,
}) {
  return (
    <div className={style.categories}>
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
