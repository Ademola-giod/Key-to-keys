import express from "express";
import axios from "axios";
import Payment from "../models/payment.js";
import crypto from "crypto";

const paymentRoutes = express.Router();

paymentRoutes.post("/initiate-payment", async (req, res) => {
  const { email, amount } = req.body;

  console.log(" Received initiate-payment request", { email, amount });

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


paymentRoutes.post("/verify-payment", async (req, res) => {
  const { reference, email } = req.body;

  try {
    const verifyResponse = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    });

    const data = verifyResponse.data;

    if (data.status && data.data.status === "success") {
      //  Save to DB if not already saved (prevent duplicates)
      const existing = await Payment.findOne({ reference });
      if (!existing) {
        await Payment.create({
          email,
          reference,
          amount: data.data.amount / 100,
          status: "success",
        });
      }

      return res.status(200).json({ 
        status: "success",
        verified: true ,
        courseLink: process.env.COURSE_LINK, // send it to frontend
      });
    } else {
      return res.status(400).json({ status: "failed", verified: false });
    }

  } catch (error) {
    console.error("VERIFY ERROR:", error?.response?.data || error.message);
    return res.status(500).json({ error: "Payment verification failed" });
  }
});


// WEBHOOK — Paystack will POST here on payment events
paymentRoutes.post("/webhook", express.json({ type: 'application/json' }), async (req, res) => {
  // Verify webhook signature for security 
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

    // Check if payment is already saved ( in other to avoid duplicates)
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
      courseLink: process.env.COURSE_LINK, // your actual course link here
    });
  } else {
    return res.json({ status: "pending" });
  }
});

export default paymentRoutes;
