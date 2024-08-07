import React from "react";
import { FriendListFrame } from "../FriendListFrame";
import "./style.css";

export const FriendList = ({ className }) => {
  return (
    <div className={`friend-list ${className}`}>
      <FriendListFrame className="friend-list-frame-instance" />
    </div>
  );
};

export default FriendList;