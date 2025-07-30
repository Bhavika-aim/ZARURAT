// src/pages/ConnectDashboard.jsx
import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ConnectDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-md border rounded">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Welcome to Zarurat Connect</h2>
      <p className="mb-4">You are logged in as a supporter or guest.</p>
      <button
        onClick={handleLogout}
        className="mt-6 bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default ConnectDashboard;
