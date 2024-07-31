/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonGroup = ({
  buttonEnd = true,
  buttonStart = true,
  align,
  className,
  buttonClassName,
  divClassName,
  text = "Button",
}) => {
  return (
    <button className={`button-group align-1-${align} ${className}`}>
      {buttonStart && (
        <button className={`div-wrapper ${buttonClassName}`}>
          <div className={`button-5 ${divClassName}`}>{text}</div>
        </button>
      )}

      {buttonEnd && (
        <button className="button-6">
          <div className="button-7">{text}</div>
        </button>
      )}
    </button>
  );
};

ButtonGroup.propTypes = {
  buttonEnd: PropTypes.bool,
  buttonStart: PropTypes.bool,
  align: PropTypes.oneOf(["start", "center", "justify", "stack", "end"]),
  text: PropTypes.string,
};
