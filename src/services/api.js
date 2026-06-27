const API_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;
export async function apiRequest(endpoint, method = "GET", body) {
  const token = localStorage.getItem("token");

  const cleanBaseUrl = API_URL?.replace(/\/$/, "");
  const cleanEndpoint = endpoint.startsWith("/")
    ? endpoint
    : `/${endpoint}`;

  const res = await fetch(`${cleanBaseUrl}${cleanEndpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await res.text();

  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch (err) {
    console.error("❌ Non-JSON response:", text);
    throw new Error("Invalid JSON response from backend");
  }

  if (!res.ok) {
    throw new Error(data?.message || "API Error");
  }

  return data;
}