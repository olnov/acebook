// HomePage.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBarGroup from "../../components/TopBarGroup";
import Avatar from "../../components/Avatar";
import FriendList from "../../components/FriendList";
import PostCardWithLike from "../../components/PostCardWithLike";
import { getPosts } from "../../services/posts";
import { getUserFriends } from "../../services/friends";
import { fetchProfileData } from "../../services/users";
import Footer from "../Footer/Footer";
import "./style.css";
import exp from "constants";

export const HomePage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState("");
  const [fullName, setfullName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const storedfullName = localStorage.getItem("fullName");

    if (!token || !userId) {
      console.error("No token or userId found, redirecting to landing page.");
      navigate("/");
      return;
    }

    setfullName(storedfullName);

    const fetchUserDetails = async () => {
      try {
        const user = await fetchProfileData(userId, token);
        setfullName(user.full_name);
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
          getUserFriends(userId), // Updated to call getUserFriends with only userId
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
        <h1>Welcome back {fullName}!</h1>
      </div>
      {/* <div className="hero-basic">
        <div className="text-content-title">
          <div className="avatar-block-2">
            <Avatar
              className="avatar-instance"
              shape="square"
              size="large"
              type="image"
            />
            <div className="div-wrapper">
              <div className="text-wrapper-7">{fullName}</div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="card-grid-content">
        <div className="friend-list-container">
          <h3>{fullName}'s Friends</h3>
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
      <Footer />
    </div>
  );
};

export default HomePage;
