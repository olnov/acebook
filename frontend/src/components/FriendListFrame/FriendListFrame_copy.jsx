/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { BuildingBlocks } from "../BuildingBlocks";
import { BuildingBlocksWrapper } from "../BuildingBlocksWrapper";
import "./style.css";

export const FriendListFrame = ({ className }) => {
  return (
    <div className={`friend-list-frame ${className}`}>
      <div className="friend-list-2">
        <div className="list-item">
          <BuildingBlocks className="state-layer-overlay" />
          <div className="state-layer">
            <div className="leading-element">
              <BuildingBlocksWrapper />
            </div>
            <div className="content">
              <div className="headline">Abbey Johnson</div>
            </div>
          </div>
        </div>
        <div className="list-item">
          <BuildingBlocks className="state-layer-overlay" />
          <div className="state-layer">
            <div className="leading-element">
              <BuildingBlocksWrapper />
            </div>
            <div className="content">
              <div className="headline">Steve Jobs</div>
            </div>
          </div>
        </div>
        <div className="list-item">
          <BuildingBlocks className="state-layer-overlay" />
          <div className="state-layer">
            <div className="leading-element">
              <BuildingBlocksWrapper />
            </div>
            <div className="content">
              <div className="headline">John Smith</div>
            </div>
          </div>
        </div>
        <div className="list-item">
          <BuildingBlocks className="state-layer-overlay" />
          <div className="state-layer">
            <div className="leading-element">
              <BuildingBlocksWrapper />
            </div>
            <div className="content">
              <div className="headline">Jane Doe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
