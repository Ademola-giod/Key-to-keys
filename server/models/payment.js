import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  email: String,
  reference: String,
  link: String,
  amount: Number,
  status: String,
  date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
