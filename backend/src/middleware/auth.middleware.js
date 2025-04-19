import jwt from "jsonwebtoken"

const authMiddleware = (req, res, next) => {

    console.log("middle begin")

    const token = req.header("Authorization");
    console.log("Received Token:", token);  // Debugging log

    if (!token) return res.status(403).json({ message: "Access denied, no token provided" });

    try {

        console.log("middle middle")
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.user = decoded.userId;

        console.log("middle end")
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid token" });
    }
};

export default authMiddleware;
