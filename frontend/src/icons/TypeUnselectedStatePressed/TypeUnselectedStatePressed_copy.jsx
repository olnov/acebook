/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeUnselectedStatePressed = ({ color = "#1D1B20", fill = "#65558F", className }) => {
  return (
    <svg
      className={`type-unselected-state-pressed ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_14_2820)">
        <rect className="rect" fill={color} fillOpacity="0.12" height="40" rx="20" width="40" x="4" y="4.00006" />
        <rect className="rect" height="16" rx="1" stroke={color} strokeWidth="2" width="16" x="16" y="16.0001" />
        <path
          className="path"
          d="M44 12.9049V40.2163C44 42.306 42.3418 44.0001 40.2963 44.0001H-6C-6 24.6701 9.33839 9.00006 28.2593 9.00006C33.9342 9.00006 39.2868 10.4097 44 12.9049Z"
          fill={fill}
          opacity="0.2"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_14_2820">
          <rect className="rect" fill="white" height="40" rx="20" width="40" x="4" y="4.00006" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeUnselectedStatePressed.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
};
