// import {useState} from "react";
// import { useNavigate } from "react-router-dom";
import "./TopBar.css";
import Logo from "../../assets/acebook.svg";

export const TopBar = ()=> {
    return (
        <div className="topbar">
            <div className="logo">
                <img width="50" height="50" src={Logo} />
                <h3>AceBook</h3>
            </div>
            <div name="search">
                <input type="text" name="search" placeholder="Find a friend" /> 
            </div>
            <div className="navigation">
                <p>Home</p>
                <p>Feed</p>
                <p>About us</p>
                <button className="login">Login</button>
                <button className="signup">Signup</button>
            </div>
        </div>
    )
};

export default TopBar;
