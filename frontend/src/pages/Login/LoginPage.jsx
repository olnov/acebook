import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopBarGroup from "../../components/TopBarGroup";
import { login } from "../../services/authentication";
import "./style.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId)
      navigate("/Home");
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
    <div className="login-page">
      <TopBarGroup 
        block="https://c.animaapp.com/M2klh9T2/img/block-2.svg"
        headerClassName="top-bar-group-instance"
        property1="default"
      />
      <div className="login-container">
        <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>
        <p className="form-footer">
          Don't have an account? <Link to="/sign-up">Sign Up!</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
