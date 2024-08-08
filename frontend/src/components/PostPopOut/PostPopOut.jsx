import { useState, useEffect } from 'react';
import CommentPagination from '../CommentPagination/CommentPagination';
import PropTypes from 'prop-types';
import { ProfileImage } from "../ProfileImage/ProfileImage";
import './style.css';
import CommentCard from '../CommentCard/CommentCard';
import { getCommentsbyPostID } from '../../services/comments.js';

const PostPopOut = ({ post, onClose }) => {
  const post_id = post._id || post.id;
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(3); // 3 rows * 2 columns = 6 posts per page

  if (!post) return null;

  const fetchComments = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found. Please log in.');
      setLoading(false);
      return;
    }
    try {
      const fetchedComments = await getCommentsbyPostID(token, post_id);
      console.log('Fetched Comments:', fetchedComments); // Log fetched posts

      // This part of the code sorts out the Array of fetched posts 
      // So that the most recent posts are displayed first
      const sortedComments = Array.isArray(fetchedComments.comments)
        ? fetchedComments.comments.sort((a, b) => new Date(b.date_created) - new Date(a.date_created))
        : [];

      console.log('Sorted Comments:', sortedComments); // Log sorted comments

      setComments(sortedComments); // Ensure posts is an array
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // Get current posts
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="post-popout-overlay">
      <div className="post-popout-container">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{post.title}</h2>
        <div className="post-popout-author">
          <ProfileImage userId={post.post_author._id} height="70" width="70" />
          <div>
            <strong>{post.post_author?.full_name || 'Unknown Author'}</strong>
            <p>{new Date(post.date_created).toLocaleDateString()}</p>
          </div>
        </div>
        <p>{post.message}</p>
        <h3>Comments</h3>
        <div className="comments-container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="comments-grid">
              {currentComments.length > 0 ? (
                currentComments.map(comment => (
                  <CommentCard key={comment._id} comment={comment} />
                ))
              ) : (
                <p>No comments available</p>
              )}
            </div>
          )}
          <CommentPagination
            commentsPerPage={commentsPerPage}
            totalComments={comments.length}
            currentPage={currentPage}
            paginate={paginate}
          />
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
