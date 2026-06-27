import { useEffect, useState } from "react";
import { getProducts } from "../../services/productsService";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [location, setLocation] = useState("");

  const limit = 10;

  const fetchProducts = async (currentPage, selectedLocation) => {
    try {
      setLoading(true);

      const skip = (currentPage - 1) * limit;

      const res = await getProducts(skip, limit, selectedLocation);

      setProducts(res.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page, location);
  }, [page, location]);

  if (loading) return <h3>Loading products...</h3>;

  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {/* FILTER */}
      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginRight: "10px" }}>
          Filter by location:
        </label>

        <select
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All</option>
          <option value="JO">Jordan (JO)</option>
          <option value="SA">Saudi Arabia (SA)</option>
        </select>
      </div>

      {/* EMPTY STATE */}
      {products.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p>No products found</p>

          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            style={{
              marginTop: "10px",
              padding: "8px 12px",
              cursor: "pointer",
            }}
          >
            ⬅ Back to previous page
          </button>
        </div>
      ) : (
        <>
          {/* GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "15px",
            }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* PAGINATION */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
            >
              Prev
            </button>

            <span>Page {page}</span>

            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={products.length < limit}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}