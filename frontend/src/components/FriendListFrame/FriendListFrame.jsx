// FriendListFrame.js
import React from "react";
import { BuildingBlocks } from "../BuildingBlocks";
import { BuildingBlocksWrapper } from "../BuildingBlocksWrapper";
import "./style.css";

export const FriendListFrame = ({ friends, className }) => {
  return (
    <div className={`friend-list-frame ${className}`}>
      <div className="friend-list-2">
        {friends.map((friend) => (
          <div key={friend.id} className="list-item">
            <BuildingBlocks className="state-layer-overlay" />
            <div className="state-layer">
              <div className="leading-element">
                <BuildingBlocksWrapper />
              </div>
              <div className="content">
                <div className="headline">{friend.full_name}</div> {/* Assuming the fetched friend details include full_name */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
