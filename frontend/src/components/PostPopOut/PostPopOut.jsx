import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const PostPopOut = ({ show, onClose, post }) => {
  if (!show) {
    return null;
  }

  const authorFullName = post.author ? post.author.full_name : 'Unknown Author';

  return (
    <div className="pop-out-overlay" onClick={onClose}>
      <div className="post-pop-out-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h1>{post.title}</h1>
        <div className="post-pop-out-header">
          <img src="path/to/avatar.jpg" alt="Avatar" className="avatar" />
          <div>
            <h4>{authorFullName}</h4>
            <p>{new Date(post.date_created).toLocaleDateString()}</p>
          </div>
        </div>
        <p>{post.message}</p>
        <h3>Comments</h3>
        <div className="comments-section">
          {/* Fake data for comments */}
          <div className="comment">
            <h4>Title</h4>
            <p>Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
            <button>Button</button>
          </div>
          <div className="comment">
            <h4>Title</h4>
            <p>Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
            <button>Button</button>
          </div>
          <div className="comment">
            <h4>Title</h4>
            <p>Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
            <button>Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

PostPopOut.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

export default PostPopOut;
