import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2 className="logo">🎮 GameStore</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {token ? (
          <>
            <Link to="/products">Products</Link>
            <button className="danger" onClick={() => {
              logout();
              navigate("/login");
            }}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}