import { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { createPost } from '../../services/posts';

const NewPostPopOut = ({ onClose, onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handlePostSubmit = async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token || !userId) {
      console.error('User not authenticated');
      return;
    }

    try {
      const post = await createPost({
        title,
        message: body,
        is_private: isPrivate,
        post_author: userId,
      }, token);

      // Handle token refresh
      const newToken = localStorage.getItem('token');
      if (newToken) {
        localStorage.setItem('token', newToken);
      }

      onPostCreated(post);
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
    <div className="new-post-popout-overlay">
      <div className="new-post-popout">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Create a New Post</h2>
        <div className="form-group">
          <label>Post title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Post Body</label>
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
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isPrivate}
              onChange={(e) => setIsPrivate(e.target.checked)}
            />
            Make Private
          </label>
        </div>
        <button className="submit-button" onClick={handlePostSubmit}>Submit Post</button>
      </div>
    </div>
  );
};

NewPostPopOut.propTypes = {
  onClose: PropTypes.func.isRequired,
  onPostCreated: PropTypes.func.isRequired,
};

export default NewPostPopOut;
