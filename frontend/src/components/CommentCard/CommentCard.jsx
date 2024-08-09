import React from 'react';
import PropTypes from 'prop-types';

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p>{comment.message}</p>
      <p><strong>Author:</strong> {comment.author_id.full_name}</p>
      <p><strong>Date:</strong> {new Date(comment.date_created).toLocaleDateString()}</p>
    </div>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.shape({
    message: PropTypes.string.isRequired,
    author_id: PropTypes.shape({
      full_name: PropTypes.string.isRequired,
    }).isRequired,
    date_created: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentCard;