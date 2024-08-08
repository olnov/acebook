const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const createComment = async (comment, token) => {
    console.log(token)
    console.log(comment)
    console.log(comment.post_id)
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(comment),
    };
    
    const response = await fetch (`${BACKEND_URL}/comments/${comment.post_id}`, requestOptions);

    if (!response.ok) {
        throw new Error ("Error creating comment");
    }

    const data = await response.json();
    return data;
};

// export const getCommentsbyPostID = async (token, post_id) => {
//     const requestOptions = {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
  
//     try {
//       const response = await fetch(`${BACKEND_URL}/comments`, requestOptions);
//       if (response.status !== 200) {
//         throw new Error("Unable to fetch posts");
//       }
//       const data = await response.json();
//       return data || []; 
//     } catch (error) {
//       console.error('Error in getPosts:', error);
//       return [];
//     }
//   };