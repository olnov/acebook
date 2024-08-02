import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClear = () => {
    setQuery('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate(`/results?query=${query}`);
    }
  };

  return (
    <div className="search-container">
      <i className="search-icon">🔍</i>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search"
        className="search-input"
      />
      {query && <i className="clear-icon" onClick={handleClear}>❌</i>}
    </div>
  );
};
