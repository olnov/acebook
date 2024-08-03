const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getPosts = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Error fetching posts');
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const createPost = async (post, token) => {
  try {
    const response = await fetch(`${BACKEND_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error('Error creating post');
    }
    const data = await response.json();
    return data.post;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};
