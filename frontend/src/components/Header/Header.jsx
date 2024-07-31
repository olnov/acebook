import React from "react";
import { NavigationPill } from "../NavigationPill";
import { Search } from "../Search";
import "./style.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img className="makers" alt="Makers" src="/img/makers.svg" />
        <span className="site-name">AceBook</span>
      </div>
      <Search className="search-bar" />
      <nav className="nav-links">
        <NavigationPill className="navigation-pill-instance" label="Home" state="active" />
        <NavigationPill className="navigation-pill-instance" label="Feed" state="default" />
        <NavigationPill className="navigation-pill-instance" label="About us" state="default" />
      </nav>
      <div className="auth-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign up</button>
      </div>
    </header>
  );
};
