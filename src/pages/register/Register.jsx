import { useState } from "react";
import { register } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await register(email, password);

      navigate("/login", { replace: true });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="auth-box">
        <h2>Register</h2>

        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="primary" onClick={handleRegister}>
          Register
        </button>

        {/* 👇 Login link added */}
        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{
              color: "blue",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}