import React from "react";
import { IconOutlinedActionThumbThumbUp2 } from "../../icons/IconOutlinedActionThumbThumbUp2";
import "./style.css";

const PropertyDefault = ({ className }) => {
  return (
    <div className={`property-default ${className}`}>
      <IconOutlinedActionThumbThumbUp2 className="icon-outlined-action-thumb-thumb-up-2" />
    </div>
  );
};

export default PropertyDefault;
