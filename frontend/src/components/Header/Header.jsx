/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { NavigationPill } from "../NavigationPill";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="block">
        <img className="makers" alt="Makers" src="/img/makers.svg" />
      </div>
      <div className="text-wrapper">AceBook</div>
      <div className="navigation-pill-list">
        <NavigationPill className="navigation-pill-instance" label="Home" state="active" />
        <NavigationPill className="navigation-pill-instance" label="Feed" state="default" />
        <NavigationPill className="navigation-pill-instance" label="About us" state="default" />
      </div>
      <div className="header-auth">
        <div className="avatar" />
        <button className="button">
          <button className="div">Login</button>
        </button>
        <button className="button-wrapper">
          <button className="button-2">Sign up</button>
        </button>
      </div>
    </div>
  );
};
