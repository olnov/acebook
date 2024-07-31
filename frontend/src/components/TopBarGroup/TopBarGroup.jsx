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
      <div className="header">
        <div className="logo">
          <img className="block" alt="Block" src={block} />
          <div className="div">AceBook</div>
        </div>
        <Search className="search-instance" />
        <div className="navigation-pill-list">
          <NavigationPill className="navigation-pill-instance" label="Home" state="active" />
          <NavigationPill className="navigation-pill-instance" label="Feed" state="default" />
          <NavigationPill className="navigation-pill-instance" label="About us" state="default" />
        </div>
        <div className="header-auth">
          {property1 === "default" ? (
            <>
              <div className="button">
                <button className="button-2">Login</button>
              </div>
              <div className="button-wrapper">
                <button className="button-3">Sign up</button>
              </div>
            </>
          ) : (
            <div className="avatar" />
          )}
        </div>
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
