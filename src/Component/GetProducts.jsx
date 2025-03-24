
    import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import NavBar from "./NavBar";

const GetProducts = () => {
    let [products, setProducts] =useState([])
    let [error,setError] = useState("")
    let[loading, setLoading] = useState("")
    let[FilteredProducts, setFilteredProducts] = useState([])


    const image_url ="https://ndege25.pythonanywhere.com/static/images/";
    const navigate = useNavigate();
   
    
    const getProducts= async() =>{
        setError("")
        setLoading("please wait...Recieving Products...");
        try {
            const response= await axios.get("https://ndege25.pythonanywhere.com/api/getproducts")
            setProducts(response.data)
            setFilteredProducts(response.data)
            setLoading("");
        } catch (error) {
            setLoading("")
            setError(error.message);
            
        }

    };

    const handleSearch =(value) =>{
        const filtered = products && products.filter((product) => 
            product.product_name.toLowerCase().includes(value.toLowerCase())
        )
        setFilteredProducts(filtered);

    }
    // useEffect(function,dependancy)

    useEffect(()=>{
        getProducts();
    }, [])
    return (
        <div className="row">
        <b className="text-warning">{loading}</b>
        <b className="text-danger">{error}</b>
        {/*navbar*/}
        <nav className="m-4">
            
            <NavBar/>
            <Link className="btn btn-primary mx-2" to="/addproduct">Add Product</Link>
            
            
        </nav>
        {/*carousel*/}

         <section class="row">
      <div class="col-md-12">
        <div class="carousel slide" id="mycarousel" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              
            </div>

            <div class="carousel-item">
              
            </div>

            <div class="carousel-item">
              
            </div>
          </div>

          <a href="#mycarousel"
           class="carousel-control-prev"
           data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>

          <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>

          <ol class="carousel-indicators">
            <li data-bs-target="#mycarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </section>
        {/*content*/}
        <div className="justify-content-center m-3">
            <div className="col-md-6">
                <input type="text"
                 placeholder="Search for product by name"
                className="form-control"
                onChange={(e) =>handleSearch(e.target.value)} />
    
            </div>
        </div>

        {FilteredProducts.map((product)=>(
 <div className="col-md-3 justify-content-center mb-4">
 <div className="card shadow">
     <img src={image_url+ product.product_photo} className="product_img" alt="" />
     <div className="card-body">
         <h5 className="mt-2">{product.product_name}</h5>
         <p className="text-muted">{product.product_desc.slice(0,10)}</p>
         <b className="text-warning">{product.product_cost} ksh</b>

         <button className="btn btn-dark w-100" onClick={() =>navigate("/singleproduct", {state:{product}}) }>View Product</button>
     </div>
 </div>
</div>
        ))}

       
        {/*footer*/}
        
       </div>
     );
}
 
export default GetProducts;