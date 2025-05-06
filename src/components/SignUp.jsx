import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () =>{
    // create variable
    let [Username, setusername]= useState("");
    let [email, setemail] = useState("");
    let [phone ,setphone] = useState("");
    let [password, setpassword] = useState("");
    let [loading, setloading] = useState("")
    let [success, setsuccess] = useState("");
    let [error, seterror] = useState("")


    const submitform = async (e) => {
      e.preventDefault();

      try {
        setloading("Please wait while we submit your data...")
        const data = new FormData ();
        data.append("username", Username);
        data.append("email", email);
        data.append("phone", phone);
        data.append("password", password);

        const response = await axios.post("https://ndege25.pythonanywhere.com/api/signup",data)

        setloading("")
        setsuccess(response.data.success)


      } 
      catch (error) {
        setloading("")}
        seterror("something went wrong")

      
    }


    return(
         <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">

                <h2> SignUp</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-success">{success}</b>
                <b className="text-danger">{error}</b>
                

                <form onSubmit={submitform}>
                    <input type="text" className="form-control" placeholder="Enter Username" required onChange={(e) =>setusername(e.target.value)}/>
                    <br />

                    <input type="email" className="form-control" placeholder="Enter Email" required onChange={(e) =>setemail(e.target.value)}/>
                    <br />
                    
                    <input type="tel" className="form-control" placeholder="Enter Phone N.o" required onChange={(e) =>setphone(e.target.value)} />
                    <br />
                    
                    <input type="password" className="form-control" placeholder="Enter Password" required onChange={(e) => setpassword(e.target.value)}/>
                    <br />
                    
                    <br />
                    <button className="btn btn-primary">Sign Up</button>
                </form>
                <p>
                    Already have an account? <Link to ="/SignIn">sign in</Link>

                </p>
            
            </div>
        </div>
    );
}

export default SignUp

