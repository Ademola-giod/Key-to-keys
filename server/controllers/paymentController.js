import axios from "axios";
import Payment from "../models/payment";

export const verifyPayment = async (req, res) => {
  const { reference, email } = req.body;

  if (!reference || !email) {
    return res.status(400).json({ status: "error", message: "Missing required fields" });
  }

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const data = response.data;

    if (data.data.status === "success") {
      // Save to MongoDB
      const payment = new Payment({
        email,
        reference,
        amount: data.data.amount / 100, // Convert kobo to naira
        status: "success",
      });

      await payment.save();

      return res.status(200).json({
        status: "success",
        message: "Payment verified successfully",
      });
    } else {
      return res.status(400).json({
        status: "failed",
        message: "Payment verification failed",
      });
    }
  } catch (error) {
    console.error("Verification error:", error.message);
    return res.status(500).json({
      status: "error",
      message: "Server error during payment verification",
      error: error.message,
    });
  }
};


console.log("🎯 COURSE LINK FROM ENV:", process.env.COURSE_LINK);
