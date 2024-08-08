// HomePage.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBarGroup from "../../components/TopBarGroup";
import Avatar from "../../components/Avatar";
import FriendList from "../../components/FriendList";
import FriendsSidebar from "../../components/FriendListFrame/FriendsSidebar";
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
    document.body.classList.add('home-page-background');

    return () => {
    document.body.classList.remove('home-page-background');
  };
  }, []);

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
        const sortedPosts = Array.isArray(fetchedPosts)
        ? fetchedPosts.sort((a, b) => new Date(b.date_created) - new Date(a.date_created))
        : [];
        const latest3Posts = sortedPosts.slice(0,3);
        setPosts(latest3Posts);
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
        <h1>Welcome back, {fullName}!</h1>
      </div>
      <h2>Your Friends</h2>
        <div className="friend-border">
          {friends.length === 0 ? (
            <p className="text-content-heading">No friends added currently, use the search bar to find them!</p>
          ) : (
            <FriendsSidebar friends={friends} />
          )}
        </div>
        <div className="card-grid-content">
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
