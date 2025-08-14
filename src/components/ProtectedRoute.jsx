import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, type }) => {
  const userType = localStorage.getItem("userType");
  if (!userType) return <Navigate to="/login" />;

  if (type === "volunteer" && userType !== "volunteer") return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
