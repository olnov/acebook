import PropTypes from "prop-types";
import React from "react";
import "./style.css";

const Avatar = ({ initials = "F", type, size, shape, className }) => {
  return (
    <div className={`avatar ${size} ${type} ${shape} ${className}`}>
      {type === "initial" && <div className="initials">{initials}</div>}
    </div>
  );
};

Avatar.propTypes = {
  initials: PropTypes.string,
  type: PropTypes.oneOf(["image", "initial"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  shape: PropTypes.oneOf(["circle", "square"]),
};

export default Avatar;