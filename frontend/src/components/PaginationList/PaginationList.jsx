/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { PaginationGap } from "../PaginationGap";
import { PaginationPage } from "../PaginationPage";
import "./style.css";

export const PaginationList = ({ className }) => {
  return (
    <div className={`pagination-list ${className}`}>
      <PaginationPage className="design-component-instance-node" number="1" stateProp="current" />
      <PaginationPage className="design-component-instance-node" number="2" stateProp="default" />
      <PaginationPage className="design-component-instance-node" number="3" stateProp="default" />
      <PaginationGap className="design-component-instance-node" />
      <PaginationPage className="design-component-instance-node" number="67" stateProp="default" />
      <PaginationPage className="design-component-instance-node" number="68" stateProp="default" />
    </div>
  );
};
