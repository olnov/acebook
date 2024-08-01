/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { PaginationList } from "../PaginationList";
import { PaginationNext } from "../PaginationNext";
import { PaginationPrevious } from "../PaginationPrevious";
import "./style.css";

export const Pagination = ({ className }) => {
  return (
    <div className={`pagination ${className}`}>
      <PaginationPrevious className="design-component-instance-node-2" disabled />
      <PaginationList className="design-component-instance-node-2" />
      <PaginationNext className="design-component-instance-node-2" />
    </div>
  );
};
