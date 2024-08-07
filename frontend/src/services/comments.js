const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const createComment = async (comment, token) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token},`
        },
        body: JSON.stringify(comment),
    };

    const response = await fetch (`${BACKEND_URL}/comments`, requestOptions);

    if (!response.ok) {
        throw new Error ("Error creating comment");
    }

    const data = await response.json();
    return data;
};

// export const getCommentsbyPost = async (token) => {
//     const requestOptions = {
//         method: "GET",
//         headers : {
//             Authorization: `Bearer ${token}`,
//         },
//     };

// }