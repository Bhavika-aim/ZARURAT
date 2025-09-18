import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return alert("Please fill all fields!");

    try {
      // Save to Firestore
      await addDoc(collection(db, "contacts"), form);

      // Send Email via EmailJS
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        form,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Try again!");
    }
  };

  if (success) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-center">
        <div>
          <h2 className="text-2xl font-semibold text-green-600">🎉 Message Sent!</h2>
          <p className="mt-2 text-gray-700">We’ll get back to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6 my-12 bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-4 text-purple-600 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded p-2"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded p-2"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full border rounded p-2"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          required
        />
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
