/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { CardGridContent } from "../CardGridContent";
import { PropertyDefault } from "../PropertyDefault";
import "./style.css";

export const FullPostPopout = ({ className }) => {
  return (
    <div className={`full-post-popout ${className}`}>
      <div className="new-puppy"> New Puppy!</div>
      <div className="avatar-block">
        <div className="div">
          <div className="text-wrapper-2">Abbey Johnson</div>
          <div className="text-wrapper-3">29/07/24</div>
        </div>
      </div>
      <div className="avatar" />
      <div className="overlap-group">
        <CardGridContent
          cardDivClassName="design-component-instance-node"
          cardImageClassName="card-grid-content-instance"
          cardImageClassNameOverride="card-grid-content-list-instance"
          className="card-grid-content-list"
          platform="desktop"
          textContentHeadingHeading="Comments"
          textContentHeadingSubheading="Most Recent"
        />
        <p className="p">
          Just adopted the sweetest rescue pup today! Meet our newest family member, Luna! 🐾❤️ #AdoptDontShop
        </p>
        <PropertyDefault className="like-button" />
      </div>
      <div className="icon-button">
        <div className="star" />
      </div>
    </div>
  );
};
