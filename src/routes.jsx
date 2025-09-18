import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Impact from "./pages/Impact";
import Donate from "./pages/Donate";
import Log from "./pages/Log";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import ConnectDashboard from "./pages/ConnectDashboard";

const AppRoutes = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/login" element={<Log />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
     <Route path="/connect-dashboard" element={<ConnectDashboard />} />
      <Route
        path="/volunteer-dashboard"
        element={
          <ProtectedRoute type="volunteer">
            <VolunteerDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
    <Footer />
  </>
);

export default AppRoutes;
