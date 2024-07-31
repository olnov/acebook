/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const CheckSmall76 = ({ color = "#1D1B20", className }) => {
  return (
    <svg
      className={`check-small-76 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10 16.4001L6 12.4001L7.4 11.0001L10 13.6001L16.6 7.00006L18 8.40006L10 16.4001Z"
        fill={color}
      />
    </svg>
  );
};

CheckSmall76.propTypes = {
  color: PropTypes.string,
};
