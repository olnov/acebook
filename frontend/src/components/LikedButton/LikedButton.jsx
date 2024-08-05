/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconOutlinedAction } from "../IconOutlinedAction";
import "./style.css";

export const LikedButton = ({
  className,
  iconOutlinedActionSubtract = "https://c.animaapp.com/CwAkVolA/img/subtract.svg",
}) => {
  return (
    <div className={`liked-button ${className}`}>
      <IconOutlinedAction
        className="icon-outlined-action-thumb-thumb-up-filled"
        subtract={iconOutlinedActionSubtract}
        subtractClassName="icon-outlined-action-instance"
      />
    </div>
  );
};

LikedButton.propTypes = {
  iconOutlinedActionSubtract: PropTypes.string,
};
