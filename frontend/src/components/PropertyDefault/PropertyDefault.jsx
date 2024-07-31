/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconOutlinedActionThumbThumbUp2 } from "../../icons/IconOutlinedActionThumbThumbUp2";
import "./style.css";

export const PropertyDefault = ({ className }) => {
  return (
    <div className={`property-default ${className}`}>
      <IconOutlinedActionThumbThumbUp2 className="icon-outlined-action-thumb-thumb-up-2" />
    </div>
  );
};
