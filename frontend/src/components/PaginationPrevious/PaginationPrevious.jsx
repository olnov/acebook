/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowLeft4 } from "../../icons/ArrowLeft4";
import "./style.css";

export const PaginationPrevious = ({ disabled = false, className }) => {
  return (
    <div className={`pagination-previous disabled-${disabled} ${className}`}>
      <ArrowLeft4 className="arrow-left" />
      <div className="text-wrapper-5">Previous</div>
    </div>
  );
};

PaginationPrevious.propTypes = {
  disabled: PropTypes.bool,
};
