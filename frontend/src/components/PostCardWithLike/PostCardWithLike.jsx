import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Ensure this file contains the required styles
import PostPopOut from '../PostPopOut/PostPopOut';
import { ProfileImage } from "../ProfileImage/ProfileImage";

const PostCardWithLike = ({ post }) => {
  const [showPopOut, setShowPopOut] = useState(false);

  const handleSeeMoreClick = () => {
    setShowPopOut(true);
  };

  const handleClosePopOut = () => {
    setShowPopOut(false);
  };

  return (
    <div className="post-card">
      <div className="post-card-header">
        <Link to={`/profile/${post.post_author._id}`}>
          <ProfileImage userId={post.post_author._id} height="40" width="40" />
          {/* <img src="path/to/avatar.jpg" alt="Avatar" className="avatar" /> Replace with actual avatar path */}
        </Link>
        <div>
          <h4>
            <Link to={`/profile/${post.post_author._id}`}>
              {post.post_author ? post.post_author.full_name : 'Unknown Author'}
            </Link>
          </h4> {/* Display the full name */}
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
      {showPopOut && <PostPopOut post={post} onClose={handleClosePopOut} />}
    </div>
  );
};

export default PostCardWithLike;

