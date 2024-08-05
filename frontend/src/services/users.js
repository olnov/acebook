// docs: https://vitejs.dev/guide/env-and-mode.html
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getUserById = async (userId, token) => {
  const response = await fetch(`${BACKEND_URL}/api/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    throw new Error("Unable to fetch user details");
  }

  const data = await response.json();
  return data;
};
