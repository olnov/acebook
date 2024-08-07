import { useContext, useEffect, useState } from "react";
import { getUserFriends, getAllUsers, addRemoveFriend } from "../../services/friends";
import { AuthContext } from "../../context/AuthContext";

export const FriendsPage = () => {
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

    const handleAddFriend = async (friendId) => {
        try {
        await addRemoveFriend(userId, friendId, token);
        
        // Update the friends and non-friends lists after adding a friend
        setFriends(prevFriends => [
            ...prevFriends,
            nonFriends.find(user => user._id === friendId)
        ]);
        
        setNonFriends(prevNonFriends =>
            prevNonFriends.filter(user => user._id !== friendId)
        );
        } catch (err) {
        console.error('Failed to add/remove friend :( ', err);
        }
    };

    const handleRemoveFriend = async (friendId) => {
        try {
        await addRemoveFriend(userId, friendId, token);
        
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
        <h1>Your Friends</h1>
        <ul>
            {friends.map(friend => (
            <li key={friend._id}>
                {friend.full_name}
                <button onClick={() => handleRemoveFriend(friend._id)}>Remove Friend</button>
            </li>
            ))}
        </ul>
        <h2>Users You Might Know</h2>
        <ul>
            {nonFriends.map(nonFriend => (
            <li key={nonFriend._id}>
                {nonFriend.full_name}
                <button onClick={() => handleAddFriend(nonFriend._id)}>Add Friend</button>
            </li>
            ))}
        </ul>
        </div>
    );
    };

export default FriendsPage;