// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-purple-700">Zarurat</Link>
      <div className="space-x-4">
        <Link to="/about" className="hover:text-purple-700">About</Link>
        <Link to="/events" className="hover:text-purple-700">Events</Link>
        <Link to="/impact" className="hover:text-purple-700">Impact</Link>
        <Link to="/contact" className="hover:text-purple-700">Contact</Link>
        <Link to="/donate" className="hover:text-purple-700">Donate</Link>
        {user ? (
          <>
            <Link to="/dashboard" className="text-purple-700">{user.email}</Link>
            <button onClick={() => auth.signOut()} className="text-red-500 hover:underline">
              Logout
            </button>
          </>
        ) : (
          <Link to="/log" className="bg-purple-700 text-white px-4 py-1 rounded hover:bg-purple-800">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
