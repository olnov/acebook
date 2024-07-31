/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { CardGridContent } from "../CardGridContent";
import { HomePageChange } from "../HomePageChange";
import "./style.css";

export const Section = ({ className }) => {
  return (
    <div className={`section ${className}`}>
      <HomePageChange className="home-page-change-instance" property1="default" />
      <CardGridContent
        cardDivClassName="design-component-instance-node"
        cardImageClassName="card-grid-content-instance"
        cardImageClassNameOverride="card-grid-content-list-instance"
        className="card-grid-content-list"
        platform="desktop"
        textContentHeadingHeading="Recent Posts"
      />
    </div>
  );
};
