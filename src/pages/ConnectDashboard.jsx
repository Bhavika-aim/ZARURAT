import React from "react";
import { useAuth } from "../context/AuthContext";

const ConnectDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6 min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user?.email || "Guest"} 👋</h1>
        <p className="text-gray-700 mb-6">
          Thank you for supporting Zarurat. Explore our events, impact, and opportunities to contribute.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/events" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Events</a>
          <a href="/impact" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Impact</a>
          <a href="/donate" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition">Donate</a>
        </div>
      </div>
    </div>
  );
};

export default ConnectDashboard;
