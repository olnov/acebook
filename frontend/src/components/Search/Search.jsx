import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '../../assets/search.svg';
// import './style.css';
import './search.css';

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
      navigate(`/results?q=${query}`);
    }
  };

  return (
    <div className="search-container">
      {/* <i className="search-icon">🔍</i> */}
      <i className='search-icon'><img src={SearchIcon} /></i>
      <input
        type="search"
        value={query}
        name='name'
        id='name'
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search"
        className="search-input"
      />
    </div>
  );
};

export default Search;