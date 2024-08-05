/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconOutlinedAction = ({
  className,
  subtractClassName,
  subtract = "https://c.animaapp.com/CwAkVolA/img/subtract-1.svg",
}) => {
  return (
    <div className={`icon-outlined-action ${className}`}>
      <img className={`subtract ${subtractClassName}`} alt="Subtract" src={subtract} />
    </div>
  );
};

IconOutlinedAction.propTypes = {
  subtract: PropTypes.string,
};
