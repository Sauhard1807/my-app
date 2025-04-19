import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/Users.js";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });

        //const hashedPassword = await bcrypt.hash(password, 10);
        const hashedPassword = password
        user = new User({ name, email, password: hashedPassword });

        await user.save();

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ message: "User registered successfully", token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
export const loginUser = async (req, res) => {
    console.log("Received login request:", req.body);

    const { email, password } = req.body;

    try {
        console.log("controller initiated")

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        //const isMatch = await bcrypt.compare(password, user.password);
        const isMatch = (password===user.password)
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        console.log("in between controller")

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token });

        console.log("controller end")
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
