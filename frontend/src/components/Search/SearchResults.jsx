import React from 'react';
import { ProfileImage } from "../ProfileImage/ProfileImage";
import './SearchResults.css'; 

export const SearchResults = ({ results }) => {
    if (!results || results.length === 0) {
        return <p>No results found.</p>;
    }

    return (
    <ul className="search-results">
        {results.map((user) => (
        // <li key={user._id} className="search-result-item">
        //     {user.full_name}, <ProfileImage userId={user._id} height="70" width="70"/>
        // </li>
        <li key={user._id} className='search-results-item'>
            <div className='search-results-card'>
            <span><ProfileImage userId={user._id} height="70" width="70"/></span>
            <span>
                <h4>{user.full_name}</h4>
                <button className='button'>Send invite</button>
            </span>
            </div>
        </li>
        ))}
    </ul>
    );
};

export default SearchResults;
