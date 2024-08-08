import React, { useContext, useState, useEffect } from 'react';
import { ProfileImage } from "../ProfileImage/ProfileImage";
import './SearchResults.css'; 
import { AuthContext } from '../../context/AuthContext';
import { getUserFriends, addRemoveFriend } from '../../services/friends';

export const SearchResults = ({ results }) => {
    const [friendIds, setFriendIds] = useState([]);
    const { token, userId } = useContext(AuthContext);

    // looks to seee if the user is a friend and then sets them in an array called later
    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const friendsData = await getUserFriends(userId, token);
                const friendId = friendsData.map(friend => friend._id);
                setFriendIds(friendId);
            } catch (err) {       
                console.error('Failed to fetch friends or users :( ', err);
            }
        };

        if (userId && token) {
            fetchFriends();
        }
    }, [userId, token, friendIds]);

    // handles adding friends
    const handleAddFriend = async (friendId) => {
        try {
            await addRemoveFriend(userId, friendId, token);
        } catch (err) {
            console.error('Failed to add/remove friend :( ', err);
        }
    };


    if (!results || results.length === 0) {
        return <p>No results found.</p>;
    }

    return (
        <ul className="search-results">
            {results.map((foundUser) => (
                <li key={foundUser._id} className='search-results-item'>
                    <div className='search-results-card'>
                        <span>
                            <ProfileImage userId={foundUser._id} height="70" width="70"/>
                        </span>
                        <span>
                            <h4>{foundUser.full_name}</h4>
                            <button className='add-friend-button' 
                                onClick={() => handleAddFriend(foundUser._id)}
                                disabled={friendIds.includes(foundUser._id)}
                                style={{ 
                                    backgroundColor: friendIds.includes(foundUser._id) ? '#ccc' : '', 
                                    cursor: friendIds.includes(foundUser._id) ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {friendIds.includes(foundUser._id) ? 'Friend Added' : 'Add Friend'}
                            </button>
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default SearchResults;
