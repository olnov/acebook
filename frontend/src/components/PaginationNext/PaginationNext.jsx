/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Size16 } from "../../icons/Size16";
import "./style.css";

export const PaginationNext = ({ disabled = false, className }) => {
  return (
    <div className={`pagination-next disabled-1-${disabled} ${className}`}>
      <div className="text-wrapper-7">Next</div>
      <Size16 className="arrow-right" />
    </div>
  );
};

PaginationNext.propTypes = {
  disabled: PropTypes.bool,
};
