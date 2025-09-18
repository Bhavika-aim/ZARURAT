// src/pages/Dashboard.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user?.email || "Guest"} 👋</h1>
      <p className="mt-2 text-gray-600">This is your volunteer dashboard.</p>
    </div>
  );
};

export default Dashboard;
