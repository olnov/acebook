import { useState, useEffect } from 'react';
import CommentPagination from '../CommentPagination/CommentPagination'
import PropTypes from 'prop-types';
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
      const sortedComments = Array.isArray(fetchedComments)
        ? fetchedComments.sort((a, b) => new Date(b.date_created) - new Date(a.date_created))
        : [];
  
      setComments(sortedComments); // Ensure posts is an array
    } catch (error) {
      console.error('Error fetching posts:', error);
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

// import React from 'react';
// import PropTypes from 'prop-types';
// import './style.css';

// const PostPopOut = ({ post, onClose }) => {
//   if (!post) return null;

//   return (
//     <div className="post-popout-overlay">
//       <div className="post-popout-container">
//         <button className="post-popout-close" onClick={onClose}>
//           X
//         </button>
//         <h2>{post.title}</h2>
//         <div className="post-popout-author">
//           <img src="path/to/avatar.jpg" alt="Avatar" />
//           <div>
//             <strong>{post.post_author?.full_name || 'Unknown Author'}</strong>
//             <p>{new Date(post.date_created).toLocaleDateString()}</p>
//           </div>
//         </div>
//         <p>{post.message}</p>
//         <h3>Comments</h3>
//         <div className="post-popout-comments">
//           <div className="comment">
//             <h4>Title</h4>
//             <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
//             <button>Button</button>
//           </div>
//           <div className="comment">
//             <h4>Title</h4>
//             <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
//             <button>Button</button>
//           </div>
//           <div className="comment">
//             <h4>Title</h4>
//             <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
//             <button>Button</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// PostPopOut.propTypes = {
//   post: PropTypes.object,
//   onClose: PropTypes.func.isRequired,
// };

// export default PostPopOut;