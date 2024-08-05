import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopBarGroup from "../../components/TopBarGroup";
import { signup } from "../../services/authentication";
import "./style.css";

const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signup(fullName, email, password);
      navigate("/login");
    } catch (err) {
      console.error(err);
      navigate("/sign-up");
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
    <div className="signup-page">
      <TopBarGroup 
        block="https://c.animaapp.com/M2klh9T2/img/block-2.svg"
        headerClassName="top-bar-group-instance"
        property1="default"
      />
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="full_name">Full Name:</label>
          <input
            id="full_name"
            type="text"
            value={fullName}
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
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="form-footer">
          Already have an account? <Link to="/login">Log in!</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
