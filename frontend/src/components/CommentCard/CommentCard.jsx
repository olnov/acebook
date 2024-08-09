import PropTypes from 'prop-types';
import './style.css';

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p>{comment.author_id.full_name}</p>
      <p> {new Date(comment.date_created).toLocaleDateString()}</p>
      <p>{comment.message}</p>
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