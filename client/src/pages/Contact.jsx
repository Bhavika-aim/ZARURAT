import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...form,
      time: new Date().toLocaleString(),
    };

    try {
      // Save to Firestore
      await addDoc(collection(db, "contactMessages"), {
        ...dataToSend,
        timestamp: serverTimestamp(),
      });

      // Send email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        dataToSend,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");
      setForm({ name: "", phone: "", email: "", message: "" });

    } catch (error) {
      console.error("Error:", error);
      alert("Email sending failed. Please try again later.");
    }
  };

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">Helpdesk</h2>
      <div className="grid md:grid-cols-2 gap-8">

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold">For Corporate Partnerships</h3>
          <p>Bhavika Jain - 8078652504</p>
          <a href="mailto:bhavikajain.ai26@jecrc.ac.in" className="text-blue-600 hover:underline">
  bhavikajain.ai26@jecrc.ac.in
</a>


          <h3 className="mt-6 text-xl font-semibold">Donation Queries</h3>
          <p><b>New Donors:</b> Devansh Lodha - 8955759474</p>
          <a href="mailto:devanshlodha.ee26@jecrc.ac.in" className="text-blue-600 hover:underline">
  devanshlodha.ai26@jecrc.ac.in
</a>

          <p><b>Existing Donors:</b> Avani Jain - 7597362467</p>
          <a href="mailto:zarurat@jecrc.ac.in" className="text-blue-600 hover:underline">
  zarurat@jecrc.ac.in
</a>

          <h3 className="mt-6 text-xl font-semibold">General Queries</h3>
         <a href="mailto:zarurat@jecrc.ac.in" className="text-blue-600 hover:underline">
  zarurat@jecrc.ac.in
</a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded space-y-4">
          <input
            className="w-full border p-2 rounded"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <div className="flex gap-4">
            <input
              className="w-1/2 border p-2 rounded"
              placeholder="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <input
              className="w-1/2 border p-2 rounded"
              placeholder="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            className="w-full border p-2 rounded"
            rows="4"
            placeholder="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <div>
            <input type="checkbox" required /> I'm not a robot
          </div>
          <button type="submit" className="bg-black text-white px-6 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
