// import express from "express";
// import axios from "axios";
// import Payment from "../models/payment.js"

// const router = express.Router();


// // verify and save payment 
// router.post("/verify-payment", async (req, res) => {
//   const { reference, email } = req.body;

//   try {
//     const response = await axios.get(
//       `https://api.paystack.co/transaction/verify/${reference}`,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
//         },
//       }
//     );

//     if (response.data.data.status === "success") {
//       await Payment.create({
//         email,
//         reference,
//         amount: response.data.data.amount,
//         status: "success",
//       });

//       res.json({ status: "success" });
//     } else {
//       res.json({ status: "failed" });
//     }
//   } catch (err) {
//     res.status(500).json({ error: "Verification failed", details: err.message });
//   }
// });

// export default router;

// import express from "express";
// import axios from "axios";
// import Payment from "../models/payment.js";

// const router = express.Router();

// // ✅ INITIATE PAYMENT — sends user to Paystack
// router.post("/initiate-payment", async (req, res) => {
//   const { email, amount } = req.body;

  
//   try {
//     const response = await axios.post(
//       "https://api.paystack.com/transaction/initialize",
//       {
//         email,
//         amount,
//         callback_url: "https://learnkeytokeys.com/verify-redirect", // 👈 Paystack redirects here after payment
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const { authorization_url } = response.data.data;
//     res.status(200).json({ authorization_url });
//   } catch (error) {
//     console.error("Payment initiation failed:", error.message);
//     res.status(500).json({ error: "Failed to initiate payment" });
//   }
// });

// // ✅ VERIFY PAYMENT (called from verify-redirect page)
// router.post("/verify-payment", async (req, res) => {
//   const { reference, email } = req.body;

//   try {
//     const response = await axios.get(
//       `https://api.paystack.co/transaction/verify/${reference}`,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
//         },
//       }
//     );

//     if (response.data.data.status === "success") {
//       await Payment.create({
//         email,
//         reference,
//         amount: response.data.data.amount,
//         status: "success",
//       });

//       res.json({ status: "success" });
//     } else {
//       res.json({ status: "failed" });
//     }
//   } catch (err) {
//     res.status(500).json({ error: "Verification failed", details: err.message });
//   }
// });

// export default router;

import express from "express";
import axios from "axios";
import Payment from "../models/payment.js";
import crypto from "crypto";

const paymentRoutes = express.Router();

paymentRoutes.post("/initiate-payment", async (req, res) => {
  const { email, amount } = req.body;

  console.log("👉 Received initiate-payment request", { email, amount });

  try {
    const response = await axios.post(
      "https://api.paystack.com/transaction/initialize",
      {
        email,
        amount,
        // callback_url: "http://localhost:5000/api/verify-redirect",
        callback_url: "https://learnkeytokeys.com/verify-redirect",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
            //  "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        },
      }
    );

    const { authorization_url } = response.data.data;
    return res.status(200).json({ authorization_url });

  } catch (error) {
    console.error("INITIATE ERROR:", error?.response?.data || error.message);
    return res.status(500).json({ error: "Failed to initiate payment" });
  }
});


// WEBHOOK — Paystack will POST here on payment events
paymentRoutes.post("/webhook", express.json({ type: 'application/json' }), async (req, res) => {
  // Verify webhook signature for security (optional but recommended)
  const hash = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
    .update(JSON.stringify(req.body))
    .digest("hex");

  if (hash !== req.headers["x-paystack-signature"]) {
    console.warn("Invalid Paystack webhook signature");
    return res.status(400).send("Invalid signature");
  }

  const event = req.body;

  if (event.event === "charge.success") {
    const { reference, customer, amount } = event.data;

    // Check if payment is already saved (avoid duplicates)
    const existingPayment = await Payment.findOne({ reference });

    if (!existingPayment) {
      await Payment.create({
        email: customer.email,
        reference,
        amount: amount / 100, // convert kobo to naira
        status: "success",
      });
      console.log(`Payment saved for ${customer.email}`);
    }
  }

  res.sendStatus(200); // Acknowledge receipt
});

// GET payment status by email — for frontend to check if payment exists
paymentRoutes.get("/payment-status", async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ status: "error", message: "Email query parameter required" });
  }

  const payment = await Payment.findOne({ email, status: "success" });

  if (payment) {
    return res.json({
      status: "success",
      courseLink: "https://drive.google.com/file/d/1Pe9J5nPtxBm14mrVvfJeugSCLwqwC0ox/view", // your actual course link here
    });
  } else {
    return res.json({ status: "pending" });
  }
});

export default paymentRoutes;
