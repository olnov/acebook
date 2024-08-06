/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TextContentTitle = ({
  title = "Title",
  hasSubtitle = true,
  subtitle = "Subtitle",
  align,
  className,
  divClassName,
}) => {
  return (
    <div className={`text-content-title ${align} ${className}`}>
      <div className={`title-2 ${divClassName}`}>{title}</div>
      {hasSubtitle && <div className="subtitle">{subtitle}</div>}
    </div>
  );
};

TextContentTitle.propTypes = {
  title: PropTypes.string,
  hasSubtitle: PropTypes.bool,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(["center", "start"]),
};
