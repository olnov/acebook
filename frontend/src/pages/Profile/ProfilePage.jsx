// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import TopBarGroup from '../../components/TopBarGroup';
// import Avatar from '../../components/Avatar';
// import FriendList from '../../components/FriendList';
// import PostCardWithLike from '../../components/PostCardWithLike';
// import { getUserById } from '../../services/users';
// import { getPostsByUser } from '../../services/posts';
// import { getFriends } from '../../services/friends';
// import './style.css';

// const ProfilePage = () => {
//   const { userId } = useParams();
//   const [user, setUser] = useState(null);
//   const [friends, setFriends] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [userError, setUserError] = useState('');
//   const [friendsError, setFriendsError] = useState('');
//   const [postsError, setPostsError] = useState('');
//   const token = localStorage.getItem('token');
//   const loggedInUserId = localStorage.getItem('userId');

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const fetchedUser = await getUserById(userId, token);
//         setUser(fetchedUser);
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//         setUserError('Error fetching user details');
//       }
//     };

//     const fetchFriends = async () => {
//       try {
//         const fetchedFriends = await getFriends(userId, token);
//         setFriends(fetchedFriends);
//       } catch (error) {
//         console.error('Error fetching friends:', error);
//         setFriendsError('Error fetching friends');
//       }
//     };

//     const fetchPosts = async () => {
//       try {
//         const fetchedPosts = await getPostsByUser(userId, token);
//         setPosts(fetchedPosts);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//         setPostsError('Error fetching posts');
//       }
//     };

//     fetchUserData();
//     fetchFriends();
//     fetchPosts();
//   }, [userId, token]);

//   const isCurrentUser = loggedInUserId === userId;

//   return (
//     <div className="profile-page">
//       <TopBarGroup className="top-bar-group" property1={token ? 'logged-in' : 'default'} block="https://c.animaapp.com/M2klh9T2/img/block-2.svg" />
//       <div className="profile-container">
//         {userError ? (
//           <div className="error-box">
//             <p>{userError}</p>
//           </div>
//         ) : (
//           user && (
//             <>
//               <div className="profile-header">
//                 <Avatar className="profile-avatar" shape="circle" size="large" src={user.profile_image || '/path/to/default/avatar.jpg'} />
//                 <h1>{user.full_name}</h1>
//                 {isCurrentUser && (
//                   <button onClick={() => { /* Implement edit bio functionality */ }}>Edit Bio</button>
//                 )}
//               </div>
//               <div className="profile-bio">
//                 <h3>{user.full_name}'s Bio</h3>
//                 <p>{user.user_bio}</p>
//               </div>
//             </>
//           )
//         )}

//         <div className="profile-friends">
//           <h3>{user?.full_name}'s Friends</h3>
//           {friendsError ? (
//             <div className="error-box">
//               <p>{friendsError}</p>
//             </div>
//           ) : (
//             friends.length === 0 && !friendsError ? (
//               <p>No friends added currently, use the search bar to find them!</p>
//             ) : (
//               <FriendList friends={friends} />
//             )
//           )}
//         </div>

//         <div className="profile-posts">
//           <h3>{user?.full_name}'s Recent Posts</h3>
//           {postsError ? (
//             <div className="error-box">
//               <p>{postsError}</p>
//             </div>
//           ) : (
//             posts.length === 0 && !postsError ? (
//               <p>No posts available</p>
//             ) : (
//               posts.map(post => (
//                 <PostCardWithLike key={post._id} post={post} />
//               ))
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
import { useState, useEffect } from 'react';
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import Footer from "../Footer/Footer";
import TopBar from "../TopBar/TopBar";
import { fetchProfileData, updateProfileData } from '../../services/users';
import "./ProfilePage.css";
import "../../assets/styles/modal.css";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bio, setBio] = useState("");
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [editedBio, setEditedBio] = useState("");

  const user_id = localStorage.getItem("userId");
  const full_name = localStorage.getItem("fullName");

  useEffect(() => {
    // Fetch profile data when component mounts
    const fetchData = async () => {
      try {
        const data = await fetchProfileData(user_id);
        setBio(data.user_bio || "Put some words about yourself here.");
        setEditedBio(data.user_bio || "");
      } catch (error) {
        console.error("Failed to fetch profile data");
      }
    };

    fetchData();
  }, [user_id]);

  const handleEditClick = () => {
    setIsEditingBio(true);
  };

  const handleBioChange = (event) => {
    setEditedBio(event.target.value);
  };

  const handleSaveBio = async () => {
    setBio(editedBio);
    setIsEditingBio(false);
    try {
        await updateProfileData(user_id, editedBio);
    } catch (error) {
        console.error("Something went wrong: ", error);
    }
  };

  const handleCancelEdit = () => {
    setEditedBio(bio);
    setIsEditingBio(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.reload(); // Consider avoiding full page reload
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;
    const formData = new FormData(form);

    const file = formData.get("profile_image");
    if (file && file.size > 1024 * 1024) {
      alert("File size exceeds the 1MB limit.");
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/profile-images`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle successful response. Close modal windows after upload.
      console.log("Uploaded successfully");
      closeModal();
    } catch (error) {
      console.error("Error during upload:", error);
      alert("An error occurred during upload. Please try again.");
    }
  };

  return (
    <>
      <TopBar />
      <div className="profile">
        <div className='banner'></div>
        <ProfileImage userId={user_id} width="150" height="150"/>
        <button className="button" onClick={openModal}>
          Profile photo
        </button>
        <h3>{full_name}</h3>
        {isEditingBio ? (
          <div>
            <textarea
              className="text-area"
              value={editedBio}
              onChange={handleBioChange}
            />
            <button className="button" onClick={handleSaveBio}>
              Save
            </button>
            <button className="button" onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>
        ) : (
          <p className="bio" onClick={handleEditClick}>
            {bio}
          </p>
        )}
        <p>Friend list</p>
      </div>
      {isModalOpen && (
        <>
          <div className="modal">
            <div className="add_new">
              <ProfileImage userId={user_id} height="150" width="150" />
              <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <label>Profile photo:</label>
                <input
                  type="file"
                  name="profile_image"
                  id="profile_image"
                  accept="image/jpeg, image/jpg"
                />
                <input
                  type="hidden"
                  name="user_id"
                  id="user_id"
                  value={user_id}
                ></input>
                <p>Image size limit is 1MB</p>
                <p>
                  <button type="submit" className="button">
                    Add
                  </button>
                  <button type="button" onClick={closeModal} className="button">
                    Cancel
                  </button>
                </p>
              </form>
            </div>
          </div>
          <div className="overlay" onClick={closeModal}></div>
        </>
      )}
      <Footer />
    </>
  );
};

export default Profile;
