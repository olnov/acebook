/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TextContentHeading } from "../TextContentHeading";
import "./style.css";

export const CardGridImage = ({
  platform,
  className,
  imageClassName,
  imageClassNameOverride,
  divClassName,
  divClassNameOverride,
  imageClassName1,
  imageClassName2,
}) => {
  return (
    <div
      className={`card-grid-image platform-2-${platform} ${className}`}
      data-responsive-mode={platform === "mobile" ? "mobile" : undefined}
    >
      <TextContentHeading
        align="start"
        className="text-content-heading-instance"
        heading="Heading"
        subheading="Subheading"
      />
      <div className="cards">
        <div className="card">
          <div className={`image-3 ${imageClassName}`} />
          <div className="body">
            <div className="text">
              <div className="text-wrapper-2">Title</div>
              <p className="p">
                Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very
                very short story.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className={`image-4 ${imageClassNameOverride}`} />
          <div className="body">
            <div className="text">
              <div className="text-wrapper-2">Title</div>
              <p className="p">
                Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very
                very short story.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className={`image-5 ${divClassName}`} />
          <div className="body">
            <div className="text">
              <div className="text-wrapper-2">Title</div>
              <p className="p">
                Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very
                very short story.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cards-2">
        <div className="card">
          <div className={`image-6 ${divClassNameOverride}`} />
          <div className="body">
            <div className="text">
              <div className="text-wrapper-2">Title</div>
              <p className="p">
                Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very
                very short story.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className={`image-7 ${imageClassName1}`} />
          <div className="body">
            <div className="text">
              <div className="text-wrapper-2">Title</div>
              <p className="p">
                Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very
                very short story.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className={`image-8 ${imageClassName2}`} />
          <div className="body">
            <div className="text">
              <div className="text-wrapper-2">Title</div>
              <p className="p">
                Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very
                very short story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardGridImage.propTypes = {
  platform: PropTypes.oneOf(["desktop", "mobile"]),
};
