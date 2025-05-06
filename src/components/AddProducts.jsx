import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddProducts = () =>{
    let [product_name, setProductName] = useState("");  
    let [product_desc, setProductDesc] = useState("");
    let [product_cost, setProductCost] = useState("");
    let [product_photo, setProductPhoto] = useState("");
    let [product_category, setProductCategory] = useState("");
    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    const navigate = useNavigate();

    const user = localStorage.getItem("user");

    const checkUser = () => {
        if (!user) {
            localStorage.clear();
            return navigate("/signin");
        }
    };

    useEffect(() => checkUser(), [user]);


    const submitForm = async(e) => {
        e.preventDefault();

        try{ 
            setError("");
            setSuccess("");
            setLoading("Please wait while we submit your data...");
            

            const data = new FormData();
            data.append("product_name", product_name);
            data.append("product_desc", product_desc);
            data.append("product_cost", product_cost);
            data.append("product_photo", product_photo);
            data.append("product_category", product_category);

            const response = await axios.post("https://ndege25.pythonanywhere.com/api/addproduct", data);
            setLoading("");
            setSuccess(response.data.success);
            setProductCost("");
            setProductDesc("");
            setProductName("");
            setProductPhoto("");
        } catch (error){
            setLoading("");
            setError(error.message);        }
    };
    




    return(
        <div className="row justify-content-center">
            <nav className="m-4">
                <Link className="btn btn-dark mx-2" to="/signin">SignIn</Link>
                <Link className="btn btn-dark mx-2" to="/signup">Signup</Link>
                <Link className="btn btn-dark mx-2" to="/addproducts">Add Products</Link>
                <Link className="btn btn-dark mx-2" to="/getproducts">Get Products</Link>
            </nav>
            <div className="col-md-6 card shadow p-4">

                <h2>Add Products</h2>    
                <b className="tex-warning">{loading}</b>            
                <b className="text-error">{error}</b>
                <b className="text-success">{success}</b>
                <br />
                <form onSubmit="{submitform}"></form>
                

                
                <form onSubmit={submitForm}>
                    <input type="text" className="form-control" placeholder="Enter Product Name" required onChange={(e) => setProductName(e.target.value)}/><br />

                    <textarea name="" id="" className="form-control" placeholder="Product Description" required onChange={(e) => setProductDesc(e.target.value)}></textarea><br />

                    <input type="number" placeholder="Product Cost"  className="form-control" required onChange={(e) => setProductCost(e.target.value)}/><br />

                    <label className="form-label" onChange={(e) => setProductPhoto(e.target.files)}>Product Photo</label>

                    <input type="file" className="form-control" required onChange={(e) => setProductPhoto(e.target.files[0])}/><br />
                    <label htmlFor="category" className="form-label">Choose a category:</label>
                <select
                    id="category"
                    value={product_category}
                    className="form-control"
                    required
                    onChange={(e) => setProductCategory(e.target.value)}
                >
                    <option value="">--Select Category--</option>
                    <option value="cases">Cases</option>
                    <option value="chargers">Chargers</option>
                    <option value="earohones">Earphones</option>
                    <option value="mystery">Cables</option>
                    
                </select>

                    <button className="btn btn-primary">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProducts


