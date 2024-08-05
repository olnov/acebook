import React from 'react';
import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.message}</p>
      <p><strong>Author:</strong> {post.post_author}</p>
      <p><strong>Date:</strong> {new Date(post.date_created).toLocaleDateString()}</p>
      <p><strong>Private:</strong> {post.is_private ? 'Yes' : 'No'}</p>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    post_author: PropTypes.string.isRequired,
    date_created: PropTypes.string.isRequired,
    is_private: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PostCard;
