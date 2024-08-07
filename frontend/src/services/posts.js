// docs: https://vitejs.dev/guide/env-and-mode.html
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getPosts = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(`${BACKEND_URL}/posts`, requestOptions);
    if (response.status !== 200) {
      throw new Error("Unable to fetch posts");
    }
    const data = await response.json();
    return data || []; 
  } catch (error) {
    console.error('Error in getPosts:', error);
    return [];
  }
};

export const createPost = async (post, token) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: 
    JSON.stringify(post),
  };

  const response = await fetch(`${BACKEND_URL}/posts`, requestOptions);

  if (!response.ok) {
    throw new Error("Error creating post");
  }

  const data = await response.json();
  return data
};

// // export const createPost = async (token, title, message, author) => {
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       title,
//       message,
//       // author - need to figure out how to add autho via token
//     })
//   };

//   const response = await fetch(`${BACKEND_URL}/posts`, requestOptions);

//   if (response.status !== 201) { 
//     throw new Error("Unable to create post");
//   }

//   const data = await response.json();
//   return data;
// };

export const getPostsByUser = async (userId, token) => {
  const response = await fetch(`${BACKEND_URL}/posts/users/${userId}/posts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    throw new Error("Unable to fetch user's posts");
  }

  const data = await response.json();
  return Array.isArray(data) ? data : [];
};

