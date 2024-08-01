import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const NavigationPill = ({ label = "Link", state = "default", className = "" }) => {
  return (
    <div className={`navigation-pill ${state} ${className}`}>
      <div className="title">{label}</div>
    </div>
  );
};

NavigationPill.propTypes = {
  label: PropTypes.string,
  state: PropTypes.oneOf(["hover", "active", "default"]),
  className: PropTypes.string,
};
