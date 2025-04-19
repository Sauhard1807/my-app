import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(cors({ origin: '*' }));

import authRoutes from "./src/routes/auth.routes.js";
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT ||5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
