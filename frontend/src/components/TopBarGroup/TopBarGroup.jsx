import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import IconOutlinedSuggestedSymbol from '../../icons/IconOutlinedSuggestedSymbol';
import NavigationPill from '../NavigationPill';
import Search from '../Search';
import NewPostPopOut from '../NewPostPopOut/NewPostPopOut';
import Toggle from '../Toggle/Toggle'; // Import the Toggle component
import { ThemeContext } from '../../context/ThemeContext';
import './style.css';

const TopBarGroup = ({
  property1,
  headerClassName,
  block = 'https://c.animaapp.com/M2klh9T2/img/block-2.svg',
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;
  const userId = localStorage.getItem('userId');
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);

  const handleNewPostClick = () => {
    setIsNewPostOpen(true);
  };

  const handleNewPostClose = () => {
    setIsNewPostOpen(false);
  };

  const handleImageError = (event) => {
    event.target.style.display = 'none';
    event.target.parentElement.style.backgroundColor = 'white';
    event.target.parentElement.style.width = '50px';
    event.target.parentElement.style.height = '50px';
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleHomeClick = () => {
    if (isLoggedIn) {
      navigate('/home');
    } else {
      navigate('/');
    }
  };

  const handleLogout = () => {
    localStorage.clear("token");
    localStorage.clear("full_name");
    localStorage.clear("userId");
    navigate ("/login");
  };

  return (
    <div className={`top-bar-group ${headerClassName}`} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="header">
        <div className="logo" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
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
          {!isLoggedIn ? (
            <>
              <div className="button" onClick={handleLoginClick}>
                <button className="button-2">Login</button>
              </div>
              <div className="button-wrapper" onClick={handleSignUpClick}>
                <button className="button-3">Sign up</button>
              </div>
            </>
          ) : (
            <>
              <Link to={`/profile/${userId}`}>
                <img className="avatar" alt="Avatar" src="path/to/avatar.jpg" /> {/* Replace with actual avatar path */}
              </Link>
              <button className="new-post-button" onClick={handleNewPostClick}>
                <IconOutlinedSuggestedSymbol className="icon-outlined" />
                New Post
              </button>
              <button className="button-4" onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
        <Toggle />
      </div>
      {isNewPostOpen && <NewPostPopOut onClose={handleNewPostClose} onPostCreated={() => {}} />}
    </div>
  );
};

TopBarGroup.propTypes = {
  property1: PropTypes.oneOf(['logged-in', 'default']),
  headerClassName: PropTypes.string,
  block: PropTypes.string,
};

export default TopBarGroup;
