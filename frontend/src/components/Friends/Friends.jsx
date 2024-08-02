import React, { useEffect, useState } from 'react';
import { getUserFriends } from './services/friends';

const FriendsList = ({ userId, token }) => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
        try {
            const friendsList = await getUserFriends(userId, token);
            setFriends(friendsList);
        } catch (error) {
            console.error("Failed to fetch friends:", error);
        }
        };

    fetchFriends();
    }, [userId, token]);

    return (
        <div>
            <h1>Friends List</h1>
            <ul>
                {friends.map(friend => (
                <li key={friend._id}>{friend.full_name} ({friend.email})</li>
                ))}
            </ul>
        </div>
    );
};

export default FriendsList;
