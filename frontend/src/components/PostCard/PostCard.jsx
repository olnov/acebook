/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Avatar } from "../Avatar";
import "./style.css";

export const PostCard = ({ className }) => {
  return (
    <div className={`post-card ${className}`}>
      <div className="avatar-block">
        <Avatar className="avatar-instance" shape="circle" size="large" type="image" />
        <div className="info">
          <div className="text-wrapper-3">Abbey Johnson</div>
          <div className="text-wrapper-4">29/07/24</div>
        </div>
      </div>
      <div className="body">
        <div className="text-2">
          <div className="text-wrapper-5">New Puppy!</div>
          <p className="p">
            Just adopted the sweetest rescue pup today! Meet our newest family member, Luna! 🐾❤️ #AdoptDontShop
          </p>
        </div>
        <div className="button-group">
          <button className="button">
            <button className="button-2">See more</button>
          </button>
        </div>
      </div>
    </div>
  );
};
