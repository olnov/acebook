const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const createlike = async (like, token) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token},`
        },
        body: JSON.stringify(like),
    };

    const response = await fetch (`${BACKEND_URL}/likes`, requestOptions);

    if (!response.ok) {
        throw new Error ("Error creating like");
    }

    const data = await response.json();
    return data;
};

export const getlikesbyPost = async (token) => {
    const requestOptions = {
        method: "GET",
        headers : {
            Authorization: `Bearer ${token}`,
        },
    };

// }