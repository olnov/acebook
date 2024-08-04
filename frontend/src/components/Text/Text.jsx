
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

const Text = ({ text = "Text", className, divClassName }) => {
  return (
    <div className={`text ${className}`}>
      <div className={`div ${divClassName}`}>{text}</div>
    </div>
  );
};

Text.propTypes = {
  text: PropTypes.string,
};

export default Text;