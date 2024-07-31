import PropTypes from "prop-types";
import React from "react";
import { Info3 } from "../../icons/Info3";
import "./style.css";

export const Card = ({
  body = "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  heading = "Title",
  button = true,
  asset = true,
  assetType,
  variant,
  direction,
  className,
  imageClassName,
  onButtonClick,
}) => {
  return (
    <div className={`card ${direction} ${variant} ${className}`}>
      {assetType === "icon" && (
        <>
          {asset && <Info3 className="info" />}
        </>
      )}

      {assetType === "image" && <div className={`image ${imageClassName}`} />}

      <div className="body">
        <div className="text">
          <div className="title-3">{heading}</div>
          <p className="body-text-for">{body}</p>
        </div>
        {button && (
          <div className="button-group-3">
            <button className="button-8" onClick={onButtonClick}>
              <div className="text-wrapper-3">Button</div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  body: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.bool,
  asset: PropTypes.bool,
  assetType: PropTypes.oneOf(["image", "icon"]),
  variant: PropTypes.oneOf(["stroke", "default"]),
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
  onButtonClick: PropTypes.func,
};
