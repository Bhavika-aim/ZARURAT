// src/Routes.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Impact from "./pages/Impact";
import Donate from "./pages/Donate";
import Log from "./pages/Log";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import { AuthProvider } from "./context/AuthContext";

const AppRoutes = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<Log />} />
        <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
        <Route path="/connect-dashboard" element={<ConnectDashboard />} />
      </Routes>
      <Footer />
    </Router>
  </AuthProvider>
);

export default AppRoutes;
