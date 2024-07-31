import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HeroActions = ({
  buttonGroupText,
  className,
  platform,
  textContentTitleSubtitle,
  textContentTitleTitle,
}) => {
  return (
    <div className={`hero-actions ${className}`}>
      <h1>{textContentTitleTitle}</h1>
      <p>{textContentTitleSubtitle}</p>
      <div className="button-group">
        <button className="login-button">Login</button>
        <button className="signup-button">{buttonGroupText}</button>
      </div>
    </div>
  );
};

HeroActions.propTypes = {
  buttonGroupText: PropTypes.string,
  className: PropTypes.string,
  platform: PropTypes.oneOf(["desktop", "mobile"]),
  textContentTitleSubtitle: PropTypes.string,
  textContentTitleTitle: PropTypes.string,
};
