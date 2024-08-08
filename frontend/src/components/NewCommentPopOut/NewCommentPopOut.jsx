// Heavily referencing the NewPostPopOut.jsx component hehe

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { createComment } from '../../services/comments';

const NewCommentPopOut = ({ post, onClose, onCommentCreated }) => {
  const [body, setBody] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleCommentSubmit = async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token || !userId) {
      console.error('User not authenticated');
      return;
    }

    try {
      const comment = await createComment({
        post_id: post._id,
        message: body,
        author_id: userId,
      }, token);

      // Handle token refresh
      const newToken = localStorage.getItem('token');
      if (newToken) {
        localStorage.setItem('token', newToken);
      }

      onCommentCreated(comment);
      onClose();
    } catch (error) {
      if (error.message.includes('Unauthorized') || error.message.includes('jwt expired')) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('full_name');
        alert('Session expired. Please log in again.');
        window.location.href = '/login';
      } else {
        console.error('Error creating post:', error);
      }
    }
  };

  return (
    <div className="new-comment-popout-overlay">
      <div className="new-comment-popout">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Create a New Comment</h2>
        <div className="form-group">
          <label>Comment Body</label>
          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              setCharCount(e.target.value.length);
            }}
            maxLength={300}
          />
          <div>{charCount}/300</div>
        </div>
        <button className="submit-button" onClick={handleCommentSubmit}>Submit Post</button>
      </div>
    </div>
  );
};

NewCommentPopOut.propTypes = {
  post: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onCommentCreated: PropTypes.func.isRequired,
};

export default NewCommentPopOut;
