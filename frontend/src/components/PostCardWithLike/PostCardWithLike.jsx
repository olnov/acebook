import React, { useState } from 'react';
import './style.css';
import PostPopOut from '../PostPopOut/PostPopOut';

const PostCardWithLike = ({ post }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSeeMoreClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const authorFullName = post.author ? post.author.full_name : 'Unknown Author';

  return (
    <div>
      <div className="post-card">
        <div className="post-card-header">
          <img src="path/to/avatar.jpg" alt="Avatar" className="avatar" />
          <div>
            <h4>{authorFullName}</h4> {/* Display the full name */}
            <p>{new Date(post.date_created).toLocaleDateString()}</p>
          </div>
          <button className="like-button">👍</button>
        </div>
        <div className="post-card-body">
          <h3>{post.title}</h3>
          <p>{post.message}</p>
        </div>
        <div className="post-card-footer">
          <button className="see-more-button" onClick={handleSeeMoreClick}>See more</button>
        </div>
      </div>
      <PostPopOut show={showModal} onClose={handleCloseModal} post={post} />
    </div>
  );
};

export default PostCardWithLike;
