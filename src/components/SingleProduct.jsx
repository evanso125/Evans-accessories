import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleProduct = () => {
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const { product } = useLocation().state || {};
    const imgUrl = "https://ndege25.pythonanywhere.com/static/images/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading("Please wait as we process payment");

        try {
            const formData = new FormData();
            formData.append("phone", phone);
            formData.append("amount", product.product_cost);

            const response = await axios.post("https://ndege25.pythonanywhere.com/api/mpesa_payment", formData);
            setLoading("");
            setSuccess(response.data.message);
        } catch (err) {
            setLoading("");
            setError(err.message);
        }
    };

    if (!product) {
        return (
            <div className="text-center mt-5">
                <h3 className="text-danger">Product not found</h3>
            </div>
        );
    }

    return (
        <div className="row justify-content-center mt-3">
            <div className="col-md-3 card shadow">
                <img
                    src={imgUrl + product.product_photo}
                    className="product_img"
                    alt="product img"
                    onError={(e) => {
                        e.target.src = "https://via.placeholder.com/150";
                    }}
                />
            </div>
            <div className="col-md-3 card shadow">
                <div className="card-body">
                    <h2>{product.product_name}</h2>
                    <h3 className="text-warning">{product.product_cost}</h3>
                    <p className="text-danger">{product.product_desc}</p>
                    {loading && <b className="text-success">{loading}</b>}
                    {error && <b className="text-danger">{error}</b>}
                    {success && <b className="text-success">{success}</b>}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            value={product.product_cost}
                            readOnly
                            required
                        />
                        <br />
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter Mpesa No 254xxxxxxxxx"
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <br />
                        <button type="submit" className="btn btn-primary">
                            Pay now
                        </button>
                    </form>
                    <Link to="/getproducts" className="btn btn-dark mt-2">
                        Back to Products
                    </Link>
                </div>
            </div>
          
        </div>
    );
};

export default SingleProduct;