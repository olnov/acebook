/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const NavigationPill = ({ label = "Link", state, className }) => {
  return (
    <div className={`navigation-pill ${state} ${className}`}>
      <div className="title">{label}</div>
    </div>
  );
};

NavigationPill.propTypes = {
  label: PropTypes.string,
  state: PropTypes.oneOf(["hover", "active", "default"]),
};
