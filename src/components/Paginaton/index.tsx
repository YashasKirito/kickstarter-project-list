import { FC } from "react";
import { TPaginationParams } from "../../types/Table";
import "./style.css";

interface IPagination {
  pagination: TPaginationParams;
  updatePagination: (params: TPaginationParams) => void;
}

const Pagination: FC<IPagination> = ({ pagination, updatePagination }) => {
  const handleNext = () => {
    updatePagination({
      ...pagination,
      offset: pagination.offset + pagination.limit,
    });
  };

  const handlePrev = () => {
    updatePagination({
      ...pagination,
      offset: pagination.offset - pagination.limit,
    });
  };

  return (
    <div className="pagination_container | flex gap-1">
      <button
        disabled={pagination.offset === 0}
        className="prev_btn nav_btn | text-sm"
        onClick={handlePrev}
      >
        {"<< "}Previous
      </button>
      <button
        disabled={pagination.offset + pagination.limit >= pagination.total}
        className="next_btn nav_btn | text-sm"
        onClick={handleNext}
      >
        Next{" >>"}
      </button>
    </div>
  );
};

export default Pagination;
