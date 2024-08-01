/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TextContentTitle } from "../TextContentTitle";
import "./style.css";

export const HeroBasic = ({
  platform,
  className,
  textContentTitleTitle = "Title",
  textContentTitleSubtitle = "Subtitle",
}) => {
  return (
    <div
      className={`hero-basic ${platform} ${className}`}
      data-responsive-mode={platform === "mobile" ? "mobile" : undefined}
    >
      <TextContentTitle
        align="center"
        className="text-content-title-instance"
        divClassName={`${platform === "mobile" && "class"}`}
        subtitle={textContentTitleSubtitle}
        title={textContentTitleTitle}
      />
    </div>
  );
};

HeroBasic.propTypes = {
  platform: PropTypes.oneOf(["desktop", "mobile"]),
  textContentTitleTitle: PropTypes.string,
  textContentTitleSubtitle: PropTypes.string,
};
