import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import paymentRoutes from "./routes/paymentRoutes.js";


dotenv.config();
connectDB();
dotenv.config();
console.log("Paystack key:", process.env.PAYSTACK_SECRET_KEY);


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", paymentRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
