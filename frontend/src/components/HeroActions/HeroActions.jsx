import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";

const HeroActions = ({
  buttonGroupText,
  className,
  textContentTitleSubtitle,
  textContentTitleTitle,
}) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className={`hero-actions ${className}`}>
      <h1>{textContentTitleTitle}</h1>
      <p>{textContentTitleSubtitle}</p>
      <div className="button-group">
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
        <button className="signup-button" onClick={handleSignUpClick}>
          {buttonGroupText}
        </button>
      </div>
    </div>
  );
};

HeroActions.propTypes = {
  buttonGroupText: PropTypes.string,
  className: PropTypes.string,
  textContentTitleSubtitle: PropTypes.string,
  textContentTitleTitle: PropTypes.string,
};

export default HeroActions;
