import { useNavigate } from "react-router-dom"

import {loginUser} from "../services/authController.js"
import { useState } from "react"

export default function Login(){
    const navigate = useNavigate()
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [error,setError]= useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting login request with:", email, password); // Debugging
        const response = await loginUser(email, password);
        console.log("Login response received:", response); // Debugging
    
        if (response.success) {
            navigate("/dashboard");
        } else {
            setError("bhais ki aankh ",response.message);
        }
    };
    

    return (

        <div>
            <h2>Login Page</h2 > 
            <div>
                <form onSubmit = {handleSubmit}>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <br/><br/>  
                    <label>Password</label>
                    <input type = "password" value={password} onChange={e=>setPassword(e.target.value)}></input>
                    <br/>
                    <br/>
                    <button type = 'submit'> Submit</button>
                </form>    
            </div>
            <div>
                <br/>
                <a onClick={()=>{ navigate("/signup")}} style ={ {color: "blue", cursor: "pointer" }}> Not a registered user 
                </a>
            </div>  
        </div>
    )
}