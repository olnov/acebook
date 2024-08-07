import { useState, useEffect } from 'react';
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import Footer from "../Footer/Footer";
import TopBarGroup from '../../components/TopBarGroup';
import { fetchProfileData, updateProfileData } from '../../services/users';
import "./style.css";
import "../../assets/styles/modal.css";
import { useParams } from 'react-router-dom';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bio, setBio] = useState("");
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [editedBio, setEditedBio] = useState("");
  const [fullName, setFullName] = useState("");
  const { userId } = useParams();
  const currentUserId = localStorage.getItem("userId");

  useEffect(() => {
    // Fetch profile data when component mounts
    const fetchData = async () => {
      try {
        const data = await fetchProfileData(userId);
        setBio(data.user_bio || "Put some words about yourself here.");
        setEditedBio(data.user_bio || "");
        setFullName(data.full_name || "");
      } catch (error) {
        console.error("Failed to fetch profile data");
      }
    };

    fetchData();
  }, [userId]);

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
        await updateProfileData(userId, editedBio);
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
    <TopBarGroup />
      <div className="profile">
        <div className='banner'></div>
        <ProfileImage userId={userId} width="150" height="150"/>
        { userId === currentUserId ? (
        <button className="button" onClick={openModal}>
          Profile photo
        </button>
        ) : ( <p></p> )}
        <h3>{fullName}</h3>
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
              <ProfileImage userId={userId} height="150" width="150" />
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
                  value={userId}
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
