import axios from "axios";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";


    const SignIn = () => {
        let [username, setUsername] = useState("");
        let [password, setPassword] = useState("");
        let[loading,setLoading] = useState("");
        let[error, setError] = useState("");
        let navigate =useNavigate()
        const submitForm = async (e) =>{
            e.preventDefault();
            try {
                setError("")
                setLoading("Please Wait...")
    
                const data =new FormData()
                data.append("username",username);
                data.append("password", password);
    
                const response =await axios.post("https://ndege25.pythonanywhere.com/api/signin",data)
                if(response.data.user){
                localStorage.setItem("user",JSON.stringify(response.data.user))
                navigate("/")
                } else{
                    setLoading("")
                    setError(response.data.message)
                }
            } catch (error) {
                setLoading("")
                setError("Something Went Wrong");
            }
        }
    

    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Sign In</h2>
                <b className="text-danger">{error}</b>
                <b className="text-warning">{loading}</b>
                <form  onSubmit={submitForm}>
                    <input type="text"
                     placeholder="Enter Username" 
                    required 
                    className="form-control" 
                    onChange={(e) => setUsername(e.target.value)}
                    />
                     <br />
                    <input type="password"
                     placeholder="Enter password"
                     required
                    className="form-control" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button className="btn btn-primary" type="submit">Sign In</button>
                </form>
                <p>Dont have an account?<Link to ="/signup">Sign Up</Link></p>
            </div>
        </div>

    );
}
 
export default SignIn;