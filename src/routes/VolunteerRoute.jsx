// src/routes/VolunteerRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const VolunteerRoute = ({ children }) => {
  const { currentUser, isVolunteer } = useAuth();

  if (!currentUser || !isVolunteer) {
    return <Navigate to="/log" replace />;
  }

  return children;
};

export default VolunteerRoute;
