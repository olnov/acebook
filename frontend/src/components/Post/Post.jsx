import "./Post.css"

const Post = (props) => {
  return (
    <div className="container">
      <div className="post">
        <article key={props.post._id}>{props.post.message}</article>
      </div>
    </div>
  )
};

export default Post;
