const BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;


export const login = async (username, password) => {
  const body = new URLSearchParams();
  body.append("username", username);
  body.append("password", password);

  const res = await fetch(`${BASE_URL}/auth/login?language=en`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
    },
    body,
  });

  const text = await res.text();

  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    throw new Error("Invalid JSON response from server");
  }

  if (!res.ok) {
    throw new Error(data?.detail || "Login failed");
  }

  if (data?.access_token) {
    localStorage.setItem("token", data.access_token);
  }

  return data;
};