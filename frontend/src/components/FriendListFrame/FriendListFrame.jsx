import React from "react";
import { BuildingBlocks } from "../BuildingBlocks";
import { BuildingBlocksWrapper } from "../BuildingBlocksWrapper";
import { getUserFriends, getAllUsers, addRemoveFriend } from "../../services/friends";
import FriendsSidebar from "./FriendsSidebar";

export const FriendListFrame = () => {
  return (
    <div className={`friend-list-frame`}>
      <FriendsSidebar/>
    </div>
  );
};
