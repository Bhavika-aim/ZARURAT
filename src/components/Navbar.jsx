// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import zaruratLogo from "../assets/zarurat-logo.jpg";

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={zaruratLogo} alt="Zarurat Logo" className="w-10 h-10 rounded-full border-2 border-orange-400" />
          <span className="font-bold text-xl">Zarurat</span>
        </Link>

        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-orange-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-300">About</Link></li>
          <li><Link to="/events" className="hover:text-orange-300">Events</Link></li>
          <li><Link to="/impact" className="hover:text-orange-300">Impact</Link></li>
          <li><Link to="/donate" className="hover:text-orange-300">Donate</Link></li>
          <li><Link to="/login" className="hover:text-orange-300">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
