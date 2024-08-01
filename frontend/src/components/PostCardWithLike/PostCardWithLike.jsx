import React from "react";
import PostCard from "../PostCard"; // Ensure PostCard is imported correctly
import PropertyDefault from "../PropertyDefault"; // Ensure PropertyDefault is imported correctly
import "./style.css";

export const PostCardWithLike = ({ className, post }) => {
  return (
    <div className={`post-card-with-like ${className}`}>
      <PostCard className="post-card-instance" post={post} />
      <PropertyDefault className="like-button" />
    </div>
  );
};

export default PostCardWithLike;
