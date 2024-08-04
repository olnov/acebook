const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const login = async (email, password) => {
  const payload = {
    email: email,
    password: password,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch(`${BACKEND_URL}/tokens`, requestOptions);

  if (response.status === 201) {
    const data = await response.json();
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId); // Assuming userId is returned
    localStorage.setItem('userName', data.userName); // Assuming userName is returned
    return data.token;
  } else {
    throw new Error(`Received status ${response.status} when logging in. Expected 201`);
  }
};

export const signup = async (full_name, email, password) => {
  const payload = {
    full_name: full_name,
    email: email,
    password: password,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch(`${BACKEND_URL}/users`, requestOptions);

  if (response.status === 201) {
    const data = await response.json();
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId); // Assuming userId is returned
    localStorage.setItem('userName', data.userName); // Assuming userName is returned
    return;
  } else {
    throw new Error(`Received status ${response.status} when signing up. Expected 201`);
  }
};
