import axios from "axios";

const API_URL = "http://localhost:5001/api/auth"||"http://backend-service:5001//api/auth";

// Function to login user
export const loginUser = async (email, password) => {
    try {
        
        const response = await axios.post(`${API_URL}/login`, { email, password });
        console.log("frontend sent reponse ",response.data)
        return { success: true, message: response.data.message };

    } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        return { success: false, message: error.response?.data?.message || "Login error" };
    }
};

// Function to register user
export const signupUser = async (name,email, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { name,email, password });
        return { success: true, message: response.data.message };
    } catch (error) {
        console.error("Signup failed:", error.response?.data || error.message); // ✅ Corrected error message
        return { success: false, message: error.response?.data?.message || "Signup error" };
    }
};
