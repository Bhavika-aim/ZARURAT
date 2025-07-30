// server/routes/payment.js
const express = require("express");
const crypto = require("crypto");
const router = express.Router();

router.post("/verify", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const secret = "YOUR_SECRET_KEY";

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    res.send({ verified: true });
  } else {
    res.status(400).send({ verified: false });
  }
});

module.exports = router;
