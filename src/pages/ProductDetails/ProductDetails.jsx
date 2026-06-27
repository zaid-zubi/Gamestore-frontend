import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../../services/productsService";
import { buyProduct } from "../../services/orderService";
import { AuthContext } from "../../context/AuthContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { token } = useContext(AuthContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);

        const res = await getProductById(id);

        // backend response: { data: {...} }
        setProduct(res.data);
      } catch (err) {
        console.error(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleBuy = async () => {
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const order = await buyProduct(id, token);

      // go to receipt page with order data
      navigate("/receipt", { state: order });
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h1>{product.title}</h1>

      <p style={{ marginTop: "10px", color: "#555" }}>
        {product.description}
      </p>

      <h2 style={{ marginTop: "20px", color: "green" }}>
        ${product.price}
      </h2>

      <p style={{ marginTop: "10px" }}>
        <strong>Location:</strong> {product.location}
      </p>

      <button
        onClick={handleBuy}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Buy Now
      </button>
    </div>
  );
}