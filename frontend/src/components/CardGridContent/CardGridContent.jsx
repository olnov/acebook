import PropTypes from "prop-types";
import React from "react";
import { Card } from "../Card";
import { TextContentHeading } from "../TextContentHeading";
import "./style.css";

export const CardGridContent = ({
  platform,
  className,
  textContentHeadingHeading = "Recent Posts",
  cardImageClassName,
  cardImageClassNameOverride,
  cardDivClassName,
}) => {
  const handleButtonClick = (title) => {
    console.log(`${title} button clicked`);
  };

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
          onButtonClick={() => handleButtonClick("Title")}
        />
        <Card
          assetType="image"
          body="Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
          className="card-instance"
          direction="horizontal"
          heading="Title"
          imageClassName={cardImageClassNameOverride}
          variant={platform === "mobile" ? "default" : "stroke"}
          onButtonClick={() => handleButtonClick("Title")}
        />
        <Card
          assetType="image"
          body="Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
          className="card-instance"
          direction="horizontal"
          heading="Title"
          imageClassName={cardDivClassName}
          variant={platform === "mobile" ? "default" : "stroke"}
          onButtonClick={() => handleButtonClick("Title")}
        />
      </div>
    </div>
  );
};

CardGridContent.propTypes = {
  platform: PropTypes.oneOf(["desktop", "mobile"]),
  textContentHeadingHeading: PropTypes.string,
};
