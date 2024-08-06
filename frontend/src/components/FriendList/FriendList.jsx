// FriendList.js
import React from "react";
import { FriendListFrame } from "../FriendListFrame";
import "./style.css";

export const FriendList = ({ friends, className }) => {
  return (
    <div className={`friend-list ${className}`}>
      <FriendListFrame className="friend-list-frame-instance" friends={friends} />
    </div>
  );
};

export default FriendList;
