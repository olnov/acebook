import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "./HomePage.css";

export const HomePage = () => {
  
  const navigate = useNavigate();
  useEffect(()=>{
    navigate("/login");
  });
  
  navigate("/login");
  return (
    <div className="home">
      <h1>Welcome to Acebook!</h1>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};
