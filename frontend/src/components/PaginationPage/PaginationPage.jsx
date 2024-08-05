import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const PaginationPage = ({ number, stateProp, onClick }) => {
  return (
    <span
      className={`pagination-page ${stateProp}`}
      onClick={onClick}
    >
      {number}
    </span>
  );
};

PaginationPage.propTypes = {
  number: PropTypes.string.isRequired,
  stateProp: PropTypes.oneOf(["current", "hover", "current-hover", "default"]),
  onClick: PropTypes.func.isRequired,
};

export default PaginationPage;
