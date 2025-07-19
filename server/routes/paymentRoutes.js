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

import express from "express";
import axios from "axios";
import Payment from "../models/payment.js";

const router = express.Router();

// ✅ INITIATE PAYMENT — sends user to Paystack
router.post("/initiate-payment", async (req, res) => {
  const { email, amount } = req.body;

  try {
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email,
        amount,
        callback_url: "https://learnkeytokeys.com/verify-redirect", // 👈 Paystack redirects here after payment
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const { authorization_url } = response.data.data;
    res.status(200).json({ authorization_url });
  } catch (error) {
    console.error("Payment initiation failed:", error.message);
    res.status(500).json({ error: "Failed to initiate payment" });
  }
});

// ✅ VERIFY PAYMENT (called from verify-redirect page)
router.post("/verify-payment", async (req, res) => {
  const { reference, email } = req.body;

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    if (response.data.data.status === "success") {
      await Payment.create({
        email,
        reference,
        amount: response.data.data.amount,
        status: "success",
      });

      res.json({ status: "success" });
    } else {
      res.json({ status: "failed" });
    }
  } catch (err) {
    res.status(500).json({ error: "Verification failed", details: err.message });
  }
});

export default router;
