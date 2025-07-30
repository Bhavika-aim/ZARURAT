// src/pages/Donate.jsx
import React, { useState } from 'react';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => launchPayment();
    document.body.appendChild(script);
  };

  const launchPayment = () => {
    if (!amount || !name || !email) return alert("Please fill all fields!");

    const options = {
      key: "rzp_test_PmcVrVHftwAxH9", // Use your real key in production
      amount: amount * 100,
      currency: "INR",
      name: "Zarurat Donation",
      description: "Support Zarurat’s mission",
      prefill: {
        name: name,
        email: email,
      },
      theme: {
        color: "#6b46c1",
      },
      handler: function (response) {
        console.log(response);
        setSuccess(true);
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  if (success) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-center">
        <div>
          <h2 className="text-2xl font-semibold text-green-600">🎉 Thank You!</h2>
          <p className="mt-2 text-gray-700">We’ve received your donation.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 my-12 bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-4 text-purple-600 text-center">Support Zarurat</h1>
      <p className="mb-6 text-center text-gray-600">Your contribution empowers education for underprivileged children.</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          loadRazorpay();
        }}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Donation Amount (₹)"
          className="w-full border rounded p-2"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default Donate;
