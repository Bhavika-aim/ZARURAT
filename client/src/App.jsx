import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Impact from './pages/Impact';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import React from 'react';
import Log from './pages/Log';
import Dashboard from './pages/Dashboard';
import VolunteerDashboard from './pages/VolunteerDashboard';
import { AuthProvider } from './context/AuthContext';
import ConnectDashboard from "./pages/ConnectDashboard";
import ChangePassword from './pages/ChangePassword';
import VolunteerRoute from './routes/VolunteerRoute';
import AdminDashboard from './pages/AdminDashboard';
import AdminVolunteers from './pages/AdminVolunteers';
function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/log" element={<Log />} />
        <Route path = "/change-password" element={ChangePassword}/>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/admin-volunteers" element={<AdminVolunteers />} />

     <Route
  path="/volunteer-dashboard"
  element={
    <VolunteerRoute>
      <VolunteerDashboard />
    </VolunteerRoute>
  }
/>
<Route path="/admin-dashboard" element={<AdminDashboard />} />

<Route
  path="/change-password"
  element={
    <VolunteerRoute>
      <ChangePassword />
    </VolunteerRoute>
  }
/>
        <Route path="/connect-dashboard" element={<ConnectDashboard />} />
      </Routes>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
