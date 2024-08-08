
import PropTypes from "prop-types";
import PaginationPage from "../PaginationPage/PaginationPage";
import PaginationGap from "../PaginationGap/PaginationGap";
import "./style.css";

export const CommentPaginationList = ({ totalComments, commentsPerPage, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalComments / commentsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const pagesToShow = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      return pageNumbers.map((number) => (
        <PaginationPage
          key={number}
          number={number.toString()}
          stateProp={number === currentPage ? "current" : "default"}
          onClick={() => paginate(number)}
        />
      ));
    }

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      endPage = Math.min(totalPages, maxPagesToShow);
    } else if (currentPage > totalPages - 3) {
      startPage = Math.max(1, totalPages - maxPagesToShow + 1);
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }

    for (let i = startPage; i <= endPage; i++) {
      pagesToShow.push(
        <PaginationPage
          key={i}
          number={i.toString()}
          stateProp={i === currentPage ? "current" : "default"}
          onClick={() => paginate(i)}
        />
      );
    }

    if (startPage > 2) {
      pagesToShow.unshift(<PaginationGap key="gap-start" />);
      pagesToShow.unshift(
        <PaginationPage
          key={1}
          number="1"
          stateProp={currentPage === 1 ? "current" : "default"}
          onClick={() => paginate(1)}
        />
      );
    } else if (startPage === 2) {
      pagesToShow.unshift(
        <PaginationPage
          key={1}
          number="1"
          stateProp={currentPage === 1 ? "current" : "default"}
          onClick={() => paginate(1)}
        />
      );
    }

    if (endPage < totalPages - 1) {
      pagesToShow.push(<PaginationGap key="gap-end" />);
      pagesToShow.push(
        <PaginationPage
          key={totalPages}
          number={totalPages.toString()}
          stateProp={currentPage === totalPages ? "current" : "default"}
          onClick={() => paginate(totalPages)}
        />
      );
    } else if (endPage === totalPages - 1) {
      pagesToShow.push(
        <PaginationPage
          key={totalPages}
          number={totalPages.toString()}
          stateProp={currentPage === totalPages ? "current" : "default"}
          onClick={() => paginate(totalPages)}
        />
      );
    }

    return pagesToShow;
  };

  return <div className="pagination-list">{renderPageNumbers()}</div>;
};

CommentPaginationList.propTypes = {
  totalComments: PropTypes.number.isRequired,
  commentsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default CommentPaginationList;