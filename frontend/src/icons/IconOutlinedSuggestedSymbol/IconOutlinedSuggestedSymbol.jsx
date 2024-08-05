import PropTypes from "prop-types";
import React from "react";

export const IconOutlinedSuggestedSymbol = ({ color = "#D9D9D9", className }) => {
  return (
    <svg
      className={`icon-outlined-suggested-symbol ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M12 5V19" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path className="path" d="M5 12H19" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

IconOutlinedSuggestedSymbol.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default IconOutlinedSuggestedSymbol;
