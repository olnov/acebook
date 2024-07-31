/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Card } from "../Card";
import { TextContentHeading } from "../TextContentHeading";
import "./style.css";

export const CardGridContent = ({
  platform,
  className,
  textContentHeadingHeading = "Heading",
  cardImageClassName,
  cardImageClassNameOverride,
  cardDivClassName,
}) => {
  return (
    <div
      className={`card-grid-content platform-${platform} ${className}`}
      data-responsive-mode={platform === "mobile" ? "mobile" : undefined}
    >
      <TextContentHeading
        align="start"
        className="text-content-heading-instance"
        heading={textContentHeadingHeading}
        subheading="Subheading"
      />
      <div className="cards">
        <Card
          assetType="image"
          body="Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
          className="card-instance"
          direction="horizontal"
          heading="Title"
          imageClassName={cardImageClassName}
          variant={platform === "mobile" ? "default" : "stroke"}
        />
        <Card
          assetType="image"
          body="Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
          className="card-instance"
          direction="horizontal"
          heading="Title"
          imageClassName={cardImageClassNameOverride}
          variant={platform === "mobile" ? "default" : "stroke"}
        />
        <Card
          assetType="image"
          body="Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
          className="card-instance"
          direction="horizontal"
          heading="Title"
          imageClassName={cardDivClassName}
          variant={platform === "mobile" ? "default" : "stroke"}
        />
      </div>
    </div>
  );
};

CardGridContent.propTypes = {
  platform: PropTypes.oneOf(["desktop", "mobile"]),
  textContentHeadingHeading: PropTypes.string,
};
