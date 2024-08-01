// docs: https://vitejs.dev/guide/env-and-mode.html
export const getPosts = async (token) => {
  try {
    const response = await fetch('/api/models/posts', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
