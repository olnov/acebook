/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TextLink = ({ text = "Text Link", className }) => {
  return (
    <div className={`text-link ${className}`}>
      <div className="text-wrapper-2">{text}</div>
    </div>
  );
};

TextLink.propTypes = {
  text: PropTypes.string,
};
