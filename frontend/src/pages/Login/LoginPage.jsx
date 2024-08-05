import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../TopBar/TopBar";
import { Footer } from "../Footer/Footer";

import { login } from "../../services/authentication";
import "./LoginPage.css";


export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //Add background
  useEffect(() => {
    document.body.classList.add('page-background');

    return () => {
    document.body.classList.remove('page-background');
  };
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("fullName", data.fullName);
      navigate("/main"); //Remember to upadte to /home later
    } catch (err) {
      console.error(err);
      navigate("/login");
    }
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
      <h2>Login</h2>
      <div className="container">
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
            <label htmlFor="password">Password:</label>
            <input
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
          <p><a href="/signup">Don't have an account? Please register.</a></p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};