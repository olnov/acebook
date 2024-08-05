import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../TopBar/TopBar";

import { signup } from "../../services/authentication";
import "./SignupPage.css"

export const SignupPage = () => {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  //Add background
  useEffect(() => {
    document.body.classList.add('page-background');

    return () => {
    document.body.classList.remove('page-background');
  };
  }, []);


  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signup(full_name, email, password);
      console.log("redirecting...:");
      navigate("/login");
    } catch (err) {
      console.error(err);
      navigate("/signup");
    }
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
    <TopBar />
    <h2>Signup</h2>
      <div className="container">
        <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="full_name">Full Name:</label>
          <input 
            id="full_name" 
            type="text" 
            value={full_name}
            onChange={handleFullNameChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            placeholder="Password"
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="on"
          />
          <p>
          <input role="submit-button" id="submit" type="submit" value="Submit" />
          </p>
        </form>
        <p><a href="/login">Already register? Please login.</a></p>
        </div>
      </div>
    </>
  );
};
