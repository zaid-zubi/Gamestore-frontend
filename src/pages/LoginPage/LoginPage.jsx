import { useState, useContext } from "react";
import { login } from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login(email, password);

    loginUser(res.access_token);
    navigate("/products", { replace: true });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
  <div className="login-page">
    <div className="auth-box">
      <h2>Login</h2>

      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  </div>
);
}