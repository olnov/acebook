/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TextContentHeading = ({
  subheading = "Subheading",
  heading = "Heading",
  hasSubheading = true,
  align,
  className,
}) => {
  return (
    <div className={`text-content-heading align-4-${align} ${className}`}>
      <div className="heading">{heading}</div>
      {hasSubheading && <div className="subheading">{subheading}</div>}
    </div>
  );
};

TextContentHeading.propTypes = {
  subheading: PropTypes.string,
  heading: PropTypes.string,
  hasSubheading: PropTypes.bool,
  align: PropTypes.oneOf(["center", "start"]),
};
