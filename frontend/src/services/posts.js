// docs: https://vitejs.dev/guide/env-and-mode.html
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getPosts = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${BACKEND_URL}/posts`, requestOptions);

  if (response.status !== 200) {
    throw new Error("Unable to fetch posts");
  }

  const data = await response.json();
  return data;
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