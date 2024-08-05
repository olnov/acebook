/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TextLink } from "../TextLink";
import "./style.css";

export const FormLogIn = ({ className, text = "Value", text1 = "Sign In" }) => {
  return (
    <div className={`form-log-in ${className}`}>
      <div className="input-field">
        <div className="label">Email</div>
        <div className="input">
          <div className="value">{text}</div>
        </div>
      </div>
      <div className="input-field">
        <div className="label">Password</div>
        <div className="input">
          <div className="value">{text}</div>
        </div>
      </div>
      <div className="button-group">
        <button className="div-wrapper">
          <button className="button-5">{text1}</button>
        </button>
      </div>
      <TextLink className="text-link-instance" text="Forgot password?" />
    </div>
  );
};

FormLogIn.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
