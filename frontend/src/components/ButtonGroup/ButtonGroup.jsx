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
    <div className={`button-group align-1-${align} ${className}`}>
      {buttonStart && (
        <div className={`div-wrapper ${buttonClassName}`}>
          <button className={`button-5 ${divClassName}`}>{text}</button>
        </div>
      )}

      {buttonEnd && (
        <div className="button-6">
          <button className="button-7">{text}</button>
        </div>
      )}
    </div>
  );
};

ButtonGroup.propTypes = {
  buttonEnd: PropTypes.bool,
  buttonStart: PropTypes.bool,
  align: PropTypes.oneOf(["start", "center", "justify", "stack", "end"]),
  text: PropTypes.string,
};
