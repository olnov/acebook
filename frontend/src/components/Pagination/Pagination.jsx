import PaginationList from "../PaginationList/PaginationList";
import PaginationNext from "../PaginationNext/PaginationNext";
import PaginationPrevious from "../PaginationPrevious/PaginationPrevious";
import PropTypes from "prop-types";
import "./style.css";

const Pagination = ({ className, totalPosts, postsPerPage, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className={`pagination ${className}`}>
      <PaginationPrevious className="pagination-previous" currentPage={currentPage} paginate={paginate} />
      <PaginationList className="pagination-list" totalPosts={totalPosts} postsPerPage={postsPerPage} currentPage={currentPage} paginate={paginate} />
      <PaginationNext className="pagination-next" currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  totalPosts: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
