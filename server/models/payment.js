import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  email: String,
  reference: String,
  amount: Number,
  status: String,
}, { timestamps: true });

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
