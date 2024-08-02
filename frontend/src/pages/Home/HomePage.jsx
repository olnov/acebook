import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBarGroup from "../../components/TopBarGroup";
import { Avatar } from "../../components/Avatar";
import { FriendList } from "../../components/FriendList";
import { PostCardWithLike } from "../../components/PostCardWithLike";
import { getPosts } from "../../services/posts";
import "./style.css";  // Import the specific style for this page

const HomePage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/landing-page"); // Redirect to the landing page if no token
    }

    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts(token);
        setPosts(fetchedPosts.slice(0, 6)); // Get the 6 most recent posts
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Error fetching posts');
      }
    };

    fetchPosts();
  }, [navigate]);

  return (
    <div className="home-page">
      <TopBarGroup
        block="https://c.animaapp.com/M2klh9T2/img/block-2.svg"
        headerClassName="top-bar-group-instance"
        property1="default"
      />
      <div className="hero-basic">
        <div className="text-content-title">
          <div className="avatar-block-2">
            <Avatar className="avatar-instance" shape="square" size="large" type="image" />
            <div className="div-wrapper">
              <div className="text-wrapper-7">Joanne Lumely</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-grid-content">
        <FriendList className="friend-list-instance" />
        <div className="text-content-heading">
          <div className="heading">Most Recent Posts</div>
        </div>
        <div className="cards">
          {error ? (
            <div className="error-message">{error}</div>
          ) : posts.length === 0 ? (
            <div className="no-posts-message">No posts</div>
          ) : (
            posts.map((post) => (
              <PostCardWithLike key={post._id} post={post} className="post-card-with-like-instance" />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
