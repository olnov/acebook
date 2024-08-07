import { useContext, useEffect, useState } from "react";
import { getUserFriends, getAllUsers } from "../../services/friends";
import { AuthContext } from "../../context/AuthContext";

const FriendsSidebar = () => {
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

    return (
        <div>
            <h3>Your Friends</h3>
            <ul>
                {friends.map(friend => (
                    <li key={friend._id}>{friend.full_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FriendsSidebar;
