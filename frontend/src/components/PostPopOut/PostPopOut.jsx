import PropTypes from 'prop-types';
import './style.css';

const PostPopOut = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="post-popout-overlay">
      <div className="post-popout-container">
        <button className="post-popout-close" onClick={onClose}>
          X
        </button>
        <h2>{post.title}</h2>
        <div className="post-popout-author">
          <img src="path/to/avatar.jpg" alt="Avatar" />
          <div>
            <strong>{post.post_author?.full_name || 'Unknown Author'}</strong>
            <p>{new Date(post.date_created).toLocaleDateString()}</p>
          </div>
        </div>
        <p>{post.message}</p>
        <h3>Comments</h3>
        <div className="post-popout-comments">
          <div className="comment">
            <h4>Title</h4>
            <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
            <button>Button</button>
          </div>
          <div className="comment">
            <h4>Title</h4>
            <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
            <button>Button</button>
          </div>
          <div className="comment">
            <h4>Title</h4>
            <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
            <button>Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

PostPopOut.propTypes = {
  post: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default PostPopOut;
