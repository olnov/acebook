import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopBarGroup from '../../components/TopBarGroup';
import Avatar from '../../components/Avatar';
import FriendList from '../../components/FriendList';
import PostCardWithLike from '../../components/PostCardWithLike';
import { getUserById } from '../../services/users';
import { getPostsByUser } from '../../services/posts';
import { getFriends } from '../../services/friends';
import './style.css';

const ProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userError, setUserError] = useState('');
  const [friendsError, setFriendsError] = useState('');
  const [postsError, setPostsError] = useState('');
  const token = localStorage.getItem('token');
  const loggedInUserId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const fetchedUser = await getUserById(userId, token);
        setUser(fetchedUser);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setUserError('Error fetching user details');
      }
    };

    const fetchFriends = async () => {
      try {
        const fetchedFriends = await getFriends(userId, token);
        setFriends(fetchedFriends);
      } catch (error) {
        console.error('Error fetching friends:', error);
        setFriendsError('Error fetching friends');
      }
    };

    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPostsByUser(userId, token);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPostsError('Error fetching posts');
      }
    };

    fetchUserData();
    fetchFriends();
    fetchPosts();
  }, [userId, token]);

  const isCurrentUser = loggedInUserId === userId;

  return (
    <div className="profile-page">
      <TopBarGroup className="top-bar-group" property1={token ? 'logged-in' : 'default'} block="https://c.animaapp.com/M2klh9T2/img/block-2.svg" />
      <div className="profile-container">
        {userError ? (
          <div className="error-box">
            <p>{userError}</p>
          </div>
        ) : (
          user && (
            <>
              <div className="profile-header">
                <Avatar className="profile-avatar" shape="circle" size="large" src={user.profile_image || '/path/to/default/avatar.jpg'} />
                <h1>{user.full_name}</h1>
                {isCurrentUser && (
                  <button onClick={() => { /* Implement edit bio functionality */ }}>Edit Bio</button>
                )}
              </div>
              <div className="profile-bio">
                <h3>{user.full_name}'s Bio</h3>
                <p>{user.user_bio}</p>
              </div>
            </>
          )
        )}

        <div className="profile-friends">
          <h3>{user?.full_name}'s Friends</h3>
          {friendsError ? (
            <div className="error-box">
              <p>{friendsError}</p>
            </div>
          ) : (
            friends.length === 0 && !friendsError ? (
              <p>No friends added currently, use the search bar to find them!</p>
            ) : (
              <FriendList friends={friends} />
            )
          )}
        </div>

        <div className="profile-posts">
          <h3>{user?.full_name}'s Recent Posts</h3>
          {postsError ? (
            <div className="error-box">
              <p>{postsError}</p>
            </div>
          ) : (
            posts.length === 0 && !postsError ? (
              <p>No posts available</p>
            ) : (
              posts.map(post => (
                <PostCardWithLike key={post._id} post={post} />
              ))
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
