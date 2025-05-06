import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

const CasesPage = () => {
  const [cases, setCases] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const img_url = "https://ndege25.pythonanywhere.com/static/images/";
  const navigate = useNavigate();

  const fetchCases = async () => {
    setError("");
    setLoading(true);
    try {
      const response = await axios.get("https://ndege25.pythonanywhere.com/api/getproducts");
      const allProducts = response.data;
      const filtered = allProducts.filter((product) => product.category === "cases");
      setCases(filtered);
    } catch (err) {
      if (err.response) {
        setError(`Error: ${err.response.data.message || "Something went wrong"}`);
      } else {
        setError("Network error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  return (
    <div className="container-fluid">
      <Navbar />
     

      <div className="container py-5">
        <h2 className="mb-4">📱 Phone Cases</h2>

        {loading && <div className="text-warning">Loading cases...</div>}
        {error && <div className="text-danger">{error}</div>}
        {!loading && cases.length === 0 && (
          <p className="text-muted">No cases available at the moment.</p>
        )}

        <div className="row g-4">
          {cases.map((product) => (
            <div key={product.id} className="col-md-3">
              <div className="card shadow h-100">
                <img
                  src={product.product_photo ? img_url + product.product_photo : "/placeholder.jpg"}
                  className="card-img-top"
                  alt={product.product_name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text text-muted">
                    {product.product_desc.slice(0, 40)}...
                  </p>
                  <p className="text-warning fw-bold">${product.product_cost}</p>
                  <button
                    className="btn btn-dark w-100"
                    onClick={() =>
                      navigate("/singleproduct", { state: { product } })
                    }
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default CasesPage;
