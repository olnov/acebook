import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const PaginationList = ({ totalPosts, postsPerPage, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-list">
      {pageNumbers.map(number => (
        <span
          key={number}
          className={`page-number ${number === currentPage ? 'active' : ''}`}
          onClick={() => paginate(number)}
        >
          {number}
        </span>
      ))}
    </div>
  );
};

PaginationList.propTypes = {
  totalPosts: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default PaginationList;
