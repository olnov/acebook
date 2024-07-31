/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { PostCard } from "../PostCard";
import { PropertyDefault } from "../PropertyDefault";
import "./style.css";

export const PostCardWithLike = ({ className }) => {
  return (
    <div className={`post-card-with-like ${className}`}>
      <div className="overlap-group">
        <PostCard className="post-card-instance" />
        <PropertyDefault className="like-button" />
      </div>
    </div>
  );
};
