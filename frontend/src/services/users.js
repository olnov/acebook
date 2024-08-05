const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchProfileData = async (userId) => {
    try {
        const response = await fetch(`${BACKEND_URL}/users/${userId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch profile data');
    }
        return await response.json();
    } catch (error) {
        console.error('Error fetching profile data:', error);
        throw error;
    }
};

export const updateProfileData = async (userId, editedBio) => {
    try {
        const response = await fetch(`${BACKEND_URL}/users/${userId}`, {
            method: "PATCH",
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify({ user_bio:editedBio }),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        // Handle successful response.
        console.log("Updated successfully");
        } catch (error) {
        console.error("Error during updating:", error);
        alert("An error occurred during updating. Please try again.");
        }
};

// Services users search query.
export const searchResults = async (searchQuery) => {
    try {
        const response = await fetch(`${BACKEND_URL}/users/search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: searchQuery }),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
    } catch (error) {
        console.error('Error fetching search results:', error);
        throw error; // Re-throw the error for the calling function to handle
    }
};
