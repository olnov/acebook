/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconOutlinedSuggestedSymbol } from "../../icons/IconOutlinedSuggestedSymbol";
import { NavigationPill } from "../NavigationPill";
import { Search } from "../Search";
import "./style.css";

export const TopBarGroup = ({
  property1,
  headerClassName,
  block = "https://c.animaapp.com/M2klh9T2/img/block.svg",
}) => {
  return (
    <div className="top-bar-group">
      <div className="overlap-group">
        {property1 === "default" && (
          <div className={`header ${headerClassName}`}>
            <img className="block" alt="Block" src={block} />
            <div className="div">AceBook</div>
            <div className="navigation-pill-list">
              <NavigationPill className="navigation-pill-instance" label="Home" state="active" />
              <NavigationPill className="navigation-pill-instance" label="Feed" state="default" />
              <NavigationPill className="navigation-pill-instance" label="About us" state="default" />
            </div>
            <div className="header-auth">
              <button className="button">
                <button className="button-2">Login</button>
              </button>
              <button className="button-wrapper">
                <button className="button-3">Sign up</button>
              </button>
            </div>
          </div>
        )}

        {property1 === "logged-in" && (
          <div className="header">
            <img className="block" alt="Block" src="https://c.animaapp.com/M2klh9T2/img/block-1.svg" />
            <div className="div">AceBook</div>
            <div className="navigation-pill-list">
              <NavigationPill className="navigation-pill-instance" label="Home" state="active" />
              <NavigationPill className="navigation-pill-instance" label="Feed" state="default" />
              <NavigationPill className="navigation-pill-instance" label="About us" state="default" />
            </div>
            <div className="header-auth">
              <div className="avatar" />
            </div>
          </div>
        )}

        <Search className="search-instance" />
        {property1 === "logged-in" && (
          <div className="new-post-button">
            <IconOutlinedSuggestedSymbol className="icon-outlined" />
            <button className="button-4">New Post</button>
          </div>
        )}
      </div>
    </div>
  );
};

TopBarGroup.propTypes = {
  property1: PropTypes.oneOf(["logged-in", "default"]),
  block: PropTypes.string,
};
