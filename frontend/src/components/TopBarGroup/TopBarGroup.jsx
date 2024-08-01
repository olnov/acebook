import PropTypes from "prop-types";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IconOutlinedSuggestedSymbol } from "../../icons/IconOutlinedSuggestedSymbol";
import { NavigationPill } from "../NavigationPill";
import { Search } from "../Search";
import "./style.css";

const TopBarGroup = ({
  property1,
  headerClassName,
  block = "/img/block-2.svg", // Update to the correct local path
}) => {
  const location = useLocation();

  const handleImageError = (event) => {
    event.target.style.display = 'none'; // Hide the image on error
    event.target.parentElement.style.backgroundColor = 'white'; // Show white box
    event.target.parentElement.style.width = '50px'; // Adjust to match image size
    event.target.parentElement.style.height = '50px'; // Adjust to match image size
  };

  return (
    <div className={`top-bar-group ${headerClassName}`}>
      <div className="header">
        <div className="logo">
          <div className="logo-container">
            <img className="block" alt="Block" src={block} onError={handleImageError} />
          </div>
          <div className="div">AceBook</div>
        </div>
        <Search className="search-instance" />
        <div className="navigation-pill-list">
          <Link to="/" className={`navigation-pill-link ${location.pathname === '/' ? 'active' : ''}`}>
            <NavigationPill className="navigation-pill-instance" label="Home" state="default" />
          </Link>
          <Link to="/feed" className={`navigation-pill-link ${location.pathname === '/feed' ? 'active' : ''}`}>
            <NavigationPill className="navigation-pill-instance" label="Feed" state="default" />
          </Link>
          <Link to="/about-us" className={`navigation-pill-link ${location.pathname === '/about-us' ? 'active' : ''}`}>
            <NavigationPill className="navigation-pill-instance" label="About us" state="default" />
          </Link>
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

export default TopBarGroup;
