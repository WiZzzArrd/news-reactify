export interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handlePageClick: (page: number) => void;
}
