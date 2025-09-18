// client\src\routes\PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children, volunteerOnly = false }) => {
  const { user, isVolunteer, loading } = useAuth();

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (!user) return <Navigate to="/log" />;
  if (volunteerOnly && !isVolunteer) return <Navigate to="/connect-dashboard" />;

  return children;
};

export default PrivateRoute;
