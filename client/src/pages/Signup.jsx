// src/pages/Signup.jsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSignup} className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-purple-700">Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded w-full">
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
