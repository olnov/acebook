import React from "react";
import PropTypes from 'prop-types';
import { Avatar } from "../Avatar";
import "./style.css";

export const PostCard = ({ className, post }) => {
  return (
    <div className={`post-card ${className}`}>
      <div className="avatar-block">
        <Avatar className="avatar-instance" shape="circle" size="large" type="image" />
        <div className="info">
          <div className="text-wrapper-3">{post.post_author.name}</div>
          <div className="text-wrapper-4">{new Date(post.date_created).toLocaleDateString()}</div>
        </div>
      </div>
      <div className="body">
        <div className="text-2">
          <div className="text-wrapper-5">{post.title}</div>
          <p className="p">{post.message}</p>
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

PostCard.propTypes = {
  className: PropTypes.string,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    post_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    date_created: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
