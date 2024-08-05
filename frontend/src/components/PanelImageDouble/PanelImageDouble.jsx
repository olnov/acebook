/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PanelImageDouble = ({ platform, className, imageClassName, imageClassNameOverride }) => {
  return (
    <div
      className={`panel-image-double platform-${platform} ${className}`}
      data-responsive-mode={platform === "mobile" ? "mobile" : undefined}
    >
      <div className={`image ${imageClassName}`} />
      <div className={`image-2 ${imageClassNameOverride}`} />
    </div>
  );
};

PanelImageDouble.propTypes = {
  platform: PropTypes.oneOf(["desktop", "mobile"]),
};
