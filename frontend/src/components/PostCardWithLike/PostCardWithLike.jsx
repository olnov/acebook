import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import PostPopOut from '../PostPopOut/PostPopOut';
import IconOutlinedActionThumbThumbUp2 from '../../icons/IconOutlinedActionThumbThumbUp2';
import { ProfileImage } from "../ProfileImage/ProfileImage";
import NewCommentPopOut from '../NewCommentPopOut/NewCommentPopOut';
import { getLikesbyPostID, createLike, deleteLike } from '../../services/likes';

const PostCardWithLike = ({ post, comment }) => {
  const [showPopOut, setShowPopOut] = useState(false);
  const [showAddComment, setShowAddComment] = useState(false);
  const [likes, setLikes] = useState([]); // Initialize with an empty array
  const [liked, setLiked] = useState(false);
  const post_id = post._id || post.id;
  const token = localStorage.getItem('token');
  const user_id = localStorage.getItem('user_id'); // Assuming user_id is stored in localStorage

  useEffect(() => {
    fetchLikes();
  }, []);

  const fetchLikes = async () => {
    if (!token) {
      console.error('No token found. Please log in.');
      return;
    }
    try {
      const fetchedLikes = await getLikesbyPostID(token, post_id);
      setLikes(fetchedLikes.likes);
      setLiked(fetchedLikes.likes.some(like => like.author_id === user_id));
    } catch (error) {
      console.error('Error fetching likes:', error);
    }
  };

  const handleLikeClick = async () => {
    try {
      if (liked) {
        const like = likes.find(like => like.author_id === user_id);
        await deleteLike(token, like._id);
      } else {
        await createLike({ post_id: post_id, author_id: user_id }, token);
      }
      fetchLikes();
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

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
  };

  return (
    <div className="post-card">
      <div className="post-card-header">
        <Link to={`/profile/${post.post_author._id}`}>
          <ProfileImage userId={post.post_author._id} height="40" width="40" />
        </Link>
        <div>
          <h4>
            <Link to={`/profile/${post.post_author._id}`}>
              {post.post_author ? post.post_author.full_name : 'Unknown Author'}
            </Link>
          </h4>
          <p>{new Date(post.date_created).toLocaleDateString()}</p>
        </div>
        <div className="like-section">
          <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>
            <IconOutlinedActionThumbThumbUp2 />
          </button>
          <p>{likes ? likes.length : 0}</p> {/* Ensure likes is always defined */}
        </div>
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
        <button className="add-comment-button" onClick={handleAddCommentClick}>Add comment</button>
        {showAddComment && <NewCommentPopOut key={post._id} post={post} onClose={handleCloseCommentClick} />}
      </div>
      <div>
      </div>
    </div>
  );
};

export default PostCardWithLike;
