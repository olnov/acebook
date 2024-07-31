/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconOutlinedActionMainSearch3 } from "../../icons/IconOutlinedActionMainSearch3";
import { X2 } from "../../icons/X2";
import "./style.css";

export const Search = ({ className }) => {
  return (
    <div className={`search ${className}`}>
      <IconOutlinedActionMainSearch3 className="icon-outlined-action" />
      <div className="text-wrapper">Search</div>
      <X2 className="x" />
    </div>
  );
};
