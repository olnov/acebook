
import CommentPaginationList from "../CommentPaginationList/CommentPaginationList.jsx"
import PaginationNext from "../PaginationNext/PaginationNext.jsx";
import PaginationPrevious from "../PaginationPrevious/PaginationPrevious.jsx";
import PropTypes from "prop-types";
import "./style.css";

export const CommentPagination = ({ className, totalComments, commentsPerPage, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalComments / commentsPerPage);

  return (
    <div className={`pagination ${className}`}>
      <PaginationPrevious className="pagination-previous" currentPage={currentPage} paginate={paginate} />
      <CommentPaginationList className="pagination-list" totalComments={totalComments} commentsPerPage={commentsPerPage} currentPage={currentPage} paginate={paginate} />
      <PaginationNext className="pagination-next" currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
    </div>
  );
};

CommentPagination.propTypes = {
  className: PropTypes.string,
  totalComments: PropTypes.number.isRequired,
  commentsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default CommentPagination;