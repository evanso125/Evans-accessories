import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {


    let[username,setUsername]= useState("")
    let[email, setEmail]= useState("")
    let[phone, setPhone]= useState("")
    let[password,SetPassword]= useState("")
    let[loading,setLoading]= useState("")
    let[error,setError]= useState("")
    let[success,setSuccess]= useState("")


    const submitForm= async(e)=>{
      e.preventDefault();
      try {
        setLoading("Please wait....")
        const data = new FormData();

        data.append("username", username);
        data.append("email",email);
        data.append("phone", phone);
        data.append("password",password);

        const response = await axios.post("https://ndege25.pythonanywhere.com/api/signup",data)
        setLoading("")
        setSuccess(response.data.success)
      } catch (error) {
        setLoading("")
        setError(error.message)
      }
    }
    return (

        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Sign Up</h2>
                <b className="text-error">{error}</b>
                <b className="text-warning">{loading}</b>
                <b className="text-success">{success}</b>


        <form onSubmit={submitForm}>
                <input type="text"
                 className="formcontrol" 
                 placeholder="Enter Username" 
                 required
                 onChange={(e) =>setUsername(e.target.value)}
                 />
                 <br />
                 <br />
                <input type="email" 
                className="formcontrol"
                placeholder="Enter E-mail"
                required
                onChange={(e) =>setEmail(e.target.value)}
                />
                  <br />
                  <br />
                <input type="tel"
                 className="formcontrol"
                 placeholder="Enter Phone No" 
                 required
                 onChange={(e) =>setPhone(e.target.value)}
                 />
                  <br />
                  <br />
                <input type="password" 
                className="formcontrol"
                placeholder="Enter Password" 
                required
                onChange={(e) =>SetPassword(e.target.value)}
                />
                 <br />
                 <br />
                 <button className="btn btn-primary">Signup</button>
                </form> 
                <p>Already have an account?<Link to="/signin">signin</Link> </p>
            </div>
        </div>
     );
}
 
export default Signup;