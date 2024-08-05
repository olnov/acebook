import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const PaginationNext = ({ currentPage, totalPages, paginate }) => {
  return (
    <span
      className={`pagination-next navigation-pill ${currentPage === totalPages ? 'disabled' : ''}`}
      onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : currentPage)}
    >
      Next →
    </span>
  );
};

PaginationNext.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default PaginationNext;
