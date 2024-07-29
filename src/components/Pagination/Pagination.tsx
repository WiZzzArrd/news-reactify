import style from "./pagination.module.css";
import { IPaginationProps } from "../../interfaces/interfaces";
import { useTheme } from "../../context/ThemeContext";

export default function Pagination({
  totalPages,
  currentPage,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
}: IPaginationProps) {
  const { isDark } = useTheme();

  return (
    <div className={`${style.pagination} ${isDark ? style.dark : style.light}`}>
      <button
        onClick={handlePrevPage}
        className={style.arrow}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>

      <div className={style.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              disabled={currentPage === index + 1}
              className={style.pageNumber}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
        className={style.arrow}
      >
        {">"}
      </button>
    </div>
  );
}
