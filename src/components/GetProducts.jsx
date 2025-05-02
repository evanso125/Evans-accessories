import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import Footer from "./Footer";

const GetProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const img_url = "https://ndege25.pythonanywhere.com/static/images/";
    const navigate = useNavigate();
    
    const fetchProducts = async () => {
        setError("");
        setLoading(true);
        try {
            const response = await axios.get("https://ndege25.pythonanywhere.com/api/getproducts");
            setProducts(response.data);
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
        fetchProducts();
    }, []);

    return (
        <div className="row">
            {loading && <b className="text-warning">Please wait... receiving products</b>}
            {error && <b className="text-danger">{error}</b>}

            {/* Navbar */}
            {/*Footer*/}
            
            <Carousel />
            <nav className="mb-4">
                <Link className="btn btn-dark mx-2" to="/signin">SignIn</Link>
                <Link className="btn btn-dark mx-2" to="/signup">Signup</Link>
                <Link className="btn btn-dark mx-2" to="/addproducts">Add Products</Link>
                <Link className="btn btn-dark mx-2" to="/">Get Products</Link>
            </nav>

            {/* No products message */}
            {products.length === 0 && !loading && !error && (
                <p className="text-muted">No products available at the moment.</p>
            )}

            {/* Product cards */}
            {products.map((product) => (
                <div key={product.id} className="col-md-3 justify-content-center mb-4">
                    <div className="card shadow">
                        <img
                            src={product.product_photo ? img_url + product.product_photo : "/path/to/default-image.jpg"}
                            className="product_img"
                            alt={product.product_name}
                        />
                        <div className="card-body">
                            <h5 className="mt-2">{product.product_name}</h5>
                            <p className="text-muted">{product.product_desc.slice(0, 30)}...</p>
                            <p className="text-warning">{product.product_cost}</p>
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

            <Footer/>
        </div>
    );
        
};

              

export default GetProducts;
