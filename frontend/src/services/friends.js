const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getFriends = async (userId, token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${BACKEND_URL}/api/users/${userId}/friends`, requestOptions);

  if (response.status !== 200) {
    throw new Error("Unable to fetch friends");
  }

  const data = await response.json();
  return data;
};
