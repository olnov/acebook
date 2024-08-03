const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getFriends = async (userId, token) => {
  try {
    const response = await fetch(`${BACKEND_URL}/users/${userId}/friends`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const errorText = await response.text();
      throw new Error(`Unexpected content type: ${contentType}. Response: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching friends:', error);
    throw error;
  }
};
