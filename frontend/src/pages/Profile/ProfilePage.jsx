import React, { useEffect, useState } from "react";
import { Avatar } from "../../components/Avatar";
import { FriendList } from "../../components/FriendList";
import { NavigationPill } from "../../components/NavigationPill";
import { PostCardWithLike } from "../../components/PostCardWithLike";
import { Search } from "../../components/Search";
import { Text } from "../../components/Text";
import { IconOutlinedSuggestedSymbol } from "../../icons/IconOutlinedSuggestedSymbol";
import { getPosts } from "../../services/posts";
import { getFriends } from "../../services/friends";
import "./style.css";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    avatar: "",
    name: "",
    bio: "",
    friends: [],
    posts: []
  });
  const [postsError, setPostsError] = useState(null);
  const [friendsError, setFriendsError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId = 'user_id_here'; // Replace with the actual user ID
        if (!token) {
          throw new Error('User is not authenticated');
        }
        
        let posts = [];
        try {
          posts = await getPosts(token);
        } catch (error) {
          setPostsError(error);
        }
        
        let friends = [];
        try {
          friends = await getFriends(userId, token);
        } catch (error) {
          setFriendsError(error);
        }

        setProfileData({
          avatar: "path/to/avatar.jpg",
          name: "Joanne Lumely",
          bio: "Joanne's bio...",
          friends,
          posts,
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <div className="top-bar-group">
        <div className="overlap-group-2">
          <header className="header">
            <img className="block" alt="Block" src="https://c.animaapp.com/MBMINqBD/img/block-2.svg" />
            <div className="text-wrapper-6">AceBook</div>
            <div className="navigation-pill-list">
              <NavigationPill className="navigation-pill-instance" label="Home" state="active" />
              <NavigationPill className="navigation-pill-instance" label="Feed" state="default" />
              <NavigationPill className="navigation-pill-instance" label="About us" state="default" />
            </div>
            <div className="header-auth">
              <div className="avatar-2" />
            </div>
          </header>
          <Search className="search-instance" />
          <div className="new-post-button">
            <IconOutlinedSuggestedSymbol className="icon-outlined" color="#D9D9D9" />
            <button className="button-3">New Post</button>
          </div>
        </div>
      </div>
      <div className="hero-basic">
        <div className="text-content-title">
          <div className="avatar-block-2">
            <Avatar className="design-component-instance-node" shape="square" size="large" type="image" />
            <div className="div-wrapper">
              <div className="text-wrapper-7">{profileData.name}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-details">
        <div className="bio">
          <h2>{profileData.name}'s Bio</h2>
          <p>{profileData.bio}</p>
        </div>
        <div className="friends">
          <h2>{profileData.name}'s Friends</h2>
          {friendsError ? (
            <div className="error-message">Error loading friends: {friendsError.message}</div>
          ) : (
            <FriendList friends={profileData.friends} />
          )}
        </div>
        <div className="posts">
          <h2>{profileData.name}'s Recent Posts</h2>
          {postsError ? (
            <div className="error-message">Error loading posts: {postsError.message}</div>
          ) : (
            <div className="profile-posts">
              {profileData.posts.map((post, index) => (
                <PostCardWithLike key={index} post={post} className="post-card-with-like-button" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
