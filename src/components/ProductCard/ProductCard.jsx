import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "12px",
        cursor: "pointer",
        background: "#fff",
        transition: "0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* TITLE */}
      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "6px" }}>
        {product.title}
      </h3>

      {/* DESCRIPTION */}
      <p style={{ fontSize: "14px", color: "#555", marginBottom: "8px" }}>
        {product.description
          ? product.description.length > 60
            ? product.description.slice(0, 60) + "..."
            : product.description
          : "No description"}
      </p>

      {/* PRICE */}
      <p style={{ fontWeight: "bold", color: "green", marginBottom: "4px" }}>
        ${product.price}
      </p>

      {/* LOCATION (important for your assignment) */}
      <p style={{ fontSize: "12px", color: "#777" }}>
        Location: {product.location}
      </p>
    </div>
  );
}