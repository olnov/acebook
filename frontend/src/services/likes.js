const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const addLike = async (req, res) => {
  const { author_id } = req.body;
  const { post_id } = req.params;

   try {
     const response = await fetch(`${BACKEND_URL}/likes/${like.post_id}`, requestOptions);

     if (!response.ok) {
       const errorData = await response.json();
       console.error("Error response from server:", errorData);
       throw new Error("Error creating like");
     }

     const data = await response.json();
     return data;
   } catch (error) {
     console.error("Error in createLike:", error);
     throw error;
   }
 };

export const getLikesbyPostID = async (token, post_id) => {
  console.log(token)
  console.log(post_id)
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(`${BACKEND_URL}/likes/${post_id}`, requestOptions);
    if (response.status !== 200) {
      throw new Error("Unable to fetch likes");
    }
    const data = await response.json();
    return data || { likes: [] };
  } catch (error) {
    console.error('Error in getLikesbyPostID:', error);
    return { likes: [] };
  }
};

export const deleteLike = async (token, like_id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${BACKEND_URL}/likes/${like_id}`, requestOptions);

  if (!response.ok) {
    throw new Error("Error deleting like");
  }

  const data = await response.json();
  return data;
};
