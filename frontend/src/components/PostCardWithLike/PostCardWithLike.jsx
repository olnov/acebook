import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Ensure this file contains the required styles
import PostPopOut from '../PostPopOut/PostPopOut';
import IconOutlinedActionThumbThumbUp2 from '../../icons/IconOutlinedActionThumbThumbUp2'; // Import the icon
import { ProfileImage } from "../ProfileImage/ProfileImage";
import NewCommentPopOut from '../NewCommentPopOut/NewCommentPopOut';


const PostCardWithLike = ({ post, comment }) => {
  const [showPopOut, setShowPopOut] = useState(false);
  const [showAddComment, setShowAddComment] = useState(false);

  const handleSeeMoreClick = () => {
    setShowPopOut(true);
  };

  const handleClosePopOut = () => {
    setShowPopOut(false);
  };

  const handleAddCommentClick = () => {
    setShowAddComment(true);
  };

  const handleCloseCommentClick = () => {
    setShowAddComment(false);
  }

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
        <button className="like-button">
          <IconOutlinedActionThumbThumbUp2 />
        </button>
      </div>
      <div className="post-card-body">
        <h3>{post.title}</h3>
        <p>{post.message}</p>
      </div>
      <div className="post-card-footer">
        <button className="see-more-button" onClick={handleSeeMoreClick}>See more</button>
      {showPopOut && <PostPopOut key={post._id} post={post} onClose={handleClosePopOut} />}
      </div>
      <div>
      <button className ="add-comment-button" onClick={handleAddCommentClick}>Add comment</button>
      {showAddComment && <NewCommentPopOut key={post._id} post={post} onClose={handleCloseCommentClick} />}
      </div>
      <div>
    </div>
    </div>
  );
};

export default PostCardWithLike;
