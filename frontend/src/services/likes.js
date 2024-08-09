const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const addLike = async (req, res) => {
  const { author_id } = req.body;
  const { post_id } = req.params;

  try {
    console.log(`Searching for post with ID: ${post_id}`);
    const post = await Post.findById(post_id);
    if (!post) {
      console.log("Post not found");
      return res.status(404).json({ error: "Post not found" });
    }

    // Check if the like already exists
    console.log(`Checking if like already exists for post_id: ${post_id} and author_id: ${author_id}`);
    const existingLike = await Like.findOne({ author_id, post_id });
    if (existingLike) {
      console.log("Like already exists");
      return res.status(400).json({ error: "Post already liked by this user" });
    }

    console.log("Creating new like");
    const like = new Like({ author_id, post_id });
    const savedLike = await like.save();

    if (!post.likes) {
      post.likes = [];
    }

    post.likes.push(savedLike._id);
    await post.save();

    console.log("Post liked successfully");
    res.status(201).json({ message: "Post liked", like: savedLike });
  } catch (error) {
    console.error("Error in addLike:", error);
    res.status(500).json({ error: "Could not like post" });
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
