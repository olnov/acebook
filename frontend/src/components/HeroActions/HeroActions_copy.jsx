/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonGroup } from "../ButtonGroup";
import { TextContentTitle } from "../TextContentTitle";
import "./style.css";

export const HeroActions = ({
  platform,
  className,
  textContentTitleTitle = "Title",
  textContentTitleSubtitle = "Subtitle",
  buttonGroupText = "Button",
}) => {
  return (
    <div
      className={`hero-actions ${platform} ${className}`}
      data-responsive-mode={platform === "mobile" ? "mobile" : undefined}
    >
      <TextContentTitle
        align="center"
        className="instance-node"
        divClassName={`${platform === "mobile" && "class"}`}
        subtitle={textContentTitleSubtitle}
        title={textContentTitleTitle}
      />
      <ButtonGroup
        align="justify"
        buttonClassName="button-group-2"
        className="instance-node"
        divClassName="button-group-instance"
        text={buttonGroupText}
      />
    </div>
  );
};

HeroActions.propTypes = {
  platform: PropTypes.oneOf(["desktop", "mobile"]),
  textContentTitleTitle: PropTypes.string,
  textContentTitleSubtitle: PropTypes.string,
  buttonGroupText: PropTypes.string,
};
