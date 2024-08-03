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
    return data.posts; // Ensure this returns the array of posts
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
