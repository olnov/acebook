import React from "react";
import { IconOutlinedActionMainSearch3 } from "../../icons/IconOutlinedActionMainSearch3";
import { X2 } from "../../icons/X2";
import "./style.css";

export const Search = ({ className }) => {
  return (
    <div className={`search ${className}`}>
      <IconOutlinedActionMainSearch3 className="icon-outlined-action" />
      <input className="search-input" type="text" placeholder="Search" />
      <X2 className="x" />
    </div>
  );
};
