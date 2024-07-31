import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../TopBar/TopBar";
import { Footer } from "../Footer/Footer";

import { login } from "../../services/authentication";
import "./LoginPage.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await login(email, password);
      localStorage.setItem("token", token);
      navigate("/main");
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
      <div class="container">
        <div class="login-form">
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
            />
            <p>
              <input role="submit-button" id="submit" type="submit" value="Submit" />
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
