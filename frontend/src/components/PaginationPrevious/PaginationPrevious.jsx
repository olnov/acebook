import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const PaginationPrevious = ({ currentPage, paginate }) => {
  return (
    <span
      className={`pagination-previous navigation-pill ${currentPage === 1 ? 'disabled' : ''}`}
      onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
    >
      ← Previous
    </span>
  );
};

PaginationPrevious.propTypes = {
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default PaginationPrevious;
