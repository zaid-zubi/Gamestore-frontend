import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiRequest } from "../../services/api";

export default function OrderReceipt() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const orderId = state?.data?.id || state?.id;

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        const res = await apiRequest(
          `/orders/${orderId}?language=en`,
          "GET"
        );

        setOrder(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (!orderId) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>No order found</h2>

        <button onClick={() => navigate("/products")}>
          Go to Products
        </button>
      </div>
    );
  }

  if (loading) return <h3>Loading receipt...</h3>;

  if (error)
    return <h3 style={{ color: "red" }}>{error}</h3>;

  if (!order) return <h3>No order data found</h3>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h1>🧾 Receipt</h1>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Product:</strong> {order.product_title}</p>
        <p><strong>Price:</strong> ${order.product_price}</p>
        <p><strong>Location:</strong> {order.product_location}</p>
        <p><strong>Date:</strong> {order.created_at}</p>
      </div>

      <button
        onClick={() => navigate("/products")}
        style={{ marginTop: "20px", padding: "10px" }}
      >
        Back to Store
      </button>
    </div>
  );
}