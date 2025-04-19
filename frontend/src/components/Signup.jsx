import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/authController.js";

export default function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await signupUser(name, email, password);

        if (response.success) {
            navigate("/"); 
        } else {
            setError(response.message);
        }
    };

    return (
        <div>
            <h2>Signup Page</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <label>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button type="submit">Submit</button>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </div>
    );
}
