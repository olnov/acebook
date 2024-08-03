import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear("token");
    localStorage.clear("full_name");
    localStorage.clear("userId");
    navigate("/");
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
