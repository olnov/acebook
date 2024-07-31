/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { FriendListFrame } from "../FriendListFrame";
import "./style.css";

export const FriendList = ({ className }) => {
  return (
    <div className={`friend-list ${className}`}>
      <FriendListFrame className="friend-list-frame-instance" />
      <div className="text-wrapper-2">Joanne’s Friends</div>
    </div>
  );
};
