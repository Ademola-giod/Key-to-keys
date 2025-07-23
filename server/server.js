// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/mongodb.js";
// import paymentRoutes from "./routes/paymentRoutes.js";


// dotenv.config();
// connectDB();
// dotenv.config();
// console.log("Paystack key:", process.env.PAYSTACK_SECRET_KEY);


// const app = express();

// // update Cors configuration to allow localhost and live domain
// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://www.learnkeytokeys.com"
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true
// }));


// app.use(express.json());
// app.use("/api", paymentRoutes);

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();
connectDB();
console.log("Paystack key:", process.env.PAYSTACK_SECRET_KEY);

const app = express();

const allowedOrigins = [
  "http://localhost:5173", //for development
  "https://learnkeytokeys.com",          // Remove www here if you use non-www domain
  "https://www.learnkeytokeys.com" //for live site
];

// CORS middleware with proper options handling
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);  // Allow Postman, curl, etc.
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],  // Allow OPTIONS explicitly
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Handle OPTIONS preflight for all routes
// app.options("/{*any}", cors());
app.options("*", cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api", paymentRoutes);
// webhooK


// app.use("/api/webhook", webhookRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// export default app; // for vercel to recognize app
