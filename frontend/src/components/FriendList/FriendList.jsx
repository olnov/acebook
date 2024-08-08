import React from "react";
import { FriendListFrame } from "../FriendListFrame";
import "./style.css";
import FriendsSidebar from "../FriendListFrame/FriendsSidebar";

export const FriendList = ({ className }) => {
  return (
    <div className={`friend-list ${className}`}>
      <FriendsSidebar className="friend-list-frame-instance" />
    </div>
  );
};

export default FriendList;