import { useState, useEffect } from 'react';
import "./ProfileImage.css"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// const user_id = localStorage.getItem("userId");

export const ProfileImage = ({ userId, height, width }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        // Fetch the image data as a Blob
        const response = await fetch(`${BACKEND_URL}/profile-images/${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const blob = await response.blob();

        // Convert Blob to a data URL
        const mimeType = blob.type;
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result);
        };
        reader.onerror = (error) => {
          console.error('Error converting blob to data URL', error);
          setError('Could not load profile image');
        };
        reader.readAsDataURL(blob);
      } catch (err) {
        console.error('Error fetching profile image:', err);
        setError('Could not load profile image');
      }
    };

    fetchProfileImage();
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {imageSrc ? (
        <img className="profile-image" src={imageSrc} alt="Profile" height={height} width={width}/>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProfileImage;
