/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Check1 } from "../../icons/Check1";
import "./style.css";

export const TagToggle = ({ label = "Label", showIcon = true, state, className }) => {
  return (
    <div className={`tag-toggle ${state} ${className}`}>
      {state === "on" && (
        <>
          <>{showIcon && <Check1 className="check" color="#F5F5F5" />}</>
        </>
      )}

      <div className="title-2">{label}</div>
    </div>
  );
};

TagToggle.propTypes = {
  label: PropTypes.string,
  showIcon: PropTypes.bool,
  state: PropTypes.oneOf(["off", "on"]),
};
