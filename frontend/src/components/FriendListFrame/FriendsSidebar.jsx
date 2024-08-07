import { useContext, useEffect, useState } from "react";
import { getUserFriends, getAllUsers, addRemoveFriend } from "../../services/friends";
import { AuthContext } from "../../context/AuthContext"; 
import ProfileImage from "../ProfileImage/ProfileImage";
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
        <div className="friends-list-container">
            <ul className="friends-list">
                {friends.map(friend => (
                    <li className = "friend-item" key={friend._id}>
                        <ProfileImage foundUserId={friend._id} height="70" width="70"/>
                    <div classname='friend-info'>
                        <span className = 'friend-name'> {friend.full_name} </span>
                        <button className="remove-friends" onClick = {() => handleRemoveFriend(friend._id)}> Remove Friend </button>
                    </div>
                    </li>
                    ))}
            </ul>
        </div>
    );
};

export default FriendsSidebar;
