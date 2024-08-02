const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


// Function to get a user's friends
export const getUserFriends = async (userId) => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("No authentication token found");
    }

    const requestOptions = {
        method: "GET",
        headers: {
    Authorization: `Bearer ${token}`,
    },
};

    const response = await fetch(`${BACKEND_URL}/users/${userId}/friends`, requestOptions);

    if (response.status !== 200) {
        throw new Error("Unable to fetch user's friends");
    }

    const data = await response.json();
    return data;
};

// Function to add or remove a friend
export const addRemoveFriend = async (userId, friendId) => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("No authentication token found");
    }    
    const requestOptions = {
        method: "PATCH",
        headers: {
    Authorization: `Bearer ${token}`,
    },
};

    const response = await fetch(`${BACKEND_URL}/users/${userId}/${friendId}`, requestOptions);

    if (response.status !== 200) {
        throw new Error("Unable to add/remove friend");
}

    const data = await response.json();
    return data;
};