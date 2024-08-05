import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBarGroup from "../../components/TopBarGroup";
import Avatar from "../../components/Avatar";
import FriendList from "../../components/FriendList";
import PostCardWithLike from "../../components/PostCardWithLike";
import { getPosts } from "../../services/posts";
import { getFriends } from "../../services/friends";
import { getUserById } from "../../services/users";
import "./style.css";
import exp from "constants";

const HomePage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const storedUserName = localStorage.getItem("userName");

    if (!token || !userId) {
      console.error("No token or userId found, redirecting to landing page.");
      navigate("/landing-page");
      return;
    }

    setUserName(storedUserName);

    const fetchUserDetails = async () => {
      try {
        const user = await getUserById(userId, token);
        setUserName(user.full_name);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Error fetching user details");
      }
    };

    const fetchData = async () => {
      try {
        await fetchUserDetails(); // Wait for user details to be fetched
        const [fetchedPosts, fetchedFriends] = await Promise.all([
          getPosts(token),
          getFriends(userId, token),
        ]);
        setPosts(Array.isArray(fetchedPosts) ? fetchedPosts.slice(0, 3) : []); // Ensure it's an array and get the 3 most recent posts
        setFriends(fetchedFriends);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="home-page">
      <TopBarGroup
        block="https://c.animaapp.com/M2klh9T2/img/block-2.svg"
        headerClassName="top-bar-group-instance"
        property1="default"
      />
      <div className="welcome-message">
        <h1>Welcome back, {userName}!</h1>
      </div>
      <div className="hero-basic">
        <div className="text-content-title">
          <div className="avatar-block-2">
            <Avatar
              className="avatar-instance"
              shape="square"
              size="large"
              type="image"
            />
            <div className="div-wrapper">
              <div className="text-wrapper-7">{userName}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-grid-content">
        <div className="friend-list-container">
          <h3>{userName}'s Friends</h3>
          {friends.length === 0 ? (
            <p>No friends added currently, use the search bar to find them!</p>
          ) : (
            <FriendList className="friend-list-instance" friends={friends} />
          )}
        </div>
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