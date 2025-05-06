import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Footer from "./Footer"; // Already imported

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const img_url = "https://ndege25.pythonanywhere.com/static/images/";

  const filterBycat = (category) => {
    setError("");
    if (category != "") {
      let filtered = products.filter((product) => product.product_category.toLowerCase() === category.toLowerCase());
      setFilteredProducts(filtered);
      if (filteredProducts.length === 0) {
        setError("No products found in this category.");
      } else {
        setError("");
      }
    } else {  
      setFilteredProducts(products);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://ndege25.pythonanywhere.com/api/getproducts");
        console.log(response.data);
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const searchProducts = (term) => { 
    if (term) {
      const filtered = products.filter((product) =>
        product.product_name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
      if (filtered.length === 0) {
        setError("No products found.");
      } else {
        setError("");
      }
    } else {
      setFilteredProducts(products);
    }
  }

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            onChange={(e) => searchProducts(e.target.value)}
          />
        </div>

        <div className="col-md-3">
            <select className="form-control" name="" id=""
                    onChange={(e) => filterBycat(e.target.value)}
                >
                    <option value="">--All Categories--</option>
                    <option value="cases">Cases</option>
                    <option value="chargers">Chargers</option>
                    <option value="earohones">Earphones</option>
                    <option value="mystery">Cables</option>
              </select>
        </div>
      </div>
      <Navbar />
      <Carousel />
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <button
            className="btn btn-primary w-100"
            onClick={() => navigate("/addproducts")}
          >
            Add Product
          </button>
        </div>
      </div>

      {loading && <p className="text-warning">Loading products...</p>}
      {error && <p className="text-danger">{error}</p>}

      {filteredProducts.length === 0 && !loading && (
        <p className="text-muted text-center">No products found.</p>
      )}

      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card shadow h-100">
              <img
                src={product.product_photo ? img_url + product.product_photo : "/default-image.jpg"}
                className="card-img-top"
                alt={product.product_name}
              />
              <div className="card-body">
                <h5>{product.product_name}</h5>
                <p className="text-muted">{product.product_desc.slice(0, 40)}...</p>
                <p className="text-warning fw-bold">${product.product_cost}</p>
                {product.product_id}
                <button
                  className="btn btn-dark w-100"
                  onClick={() => navigate("/singleproduct", { state: { product } })}
                >
                  View Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Footer component here */}
      <Footer />
    </div>
  );
};

export default GetProducts;

