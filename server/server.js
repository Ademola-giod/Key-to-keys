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

// update Cors configuration to allow localhost and live domain
const allowedOrigins = [
  "http://localhost:5173",
  "https://www.learnkeytokeys.com"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));


app.use(express.json());
app.use("/api/save-payment", paymentRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
