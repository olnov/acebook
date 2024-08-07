import { useContext, useEffect, useState } from "react";
import { getUserFriends, getAllUsers, addRemoveFriend } from "../../services/friends";
import { AuthContext } from "../../context/AuthContext"; 
import './friendsStyle.css';

export const FriendsSidebar = () => {
    const [friends, setFriends] = useState([]);
    const { token, userId } = useContext(AuthContext);
    const [nonFriends, setNonFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const friendsData = await getUserFriends(userId, token);
                setFriends(friendsData);

                const allUsersData = await getAllUsers(token);
                const nonFriendsData = allUsersData.filter(
                    user => !friendsData.some(friend => friend._id === user._id) && user._id !== userId
                );
                setNonFriends(nonFriendsData);
            } catch (err) {       
                console.error('Failed to fetch friends or users :( ', err);
            }
        };

        if (userId && token) {
            fetchFriends();
        }
    }, [userId, token]);

    const handleRemoveFriend = async (friendId) => {
        try {
        await addRemoveFriend(userId, friendId);
        
        // Update the friends and non-friends lists after removing a friend
        setFriends(prevFriends =>
            prevFriends.filter(friend => friend._id !== friendId)
        );
        
        setNonFriends(prevNonFriends => [
            ...prevNonFriends,
            friends.find(friend => friend._id === friendId)
        ]);
        } catch (err) {
        console.error('Failed to remove friend :( ', err);
        }
    };

    return (
        <div>
            <h3>Your Friends</h3>
            <ul>
                {friends.map(friend => (
                    <li key={friend._id}>{friend.full_name}
                    <button className="remove-friends" onClick = {() => handleRemoveFriend(friend._id)}> Remove Friend </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendsSidebar;
