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
