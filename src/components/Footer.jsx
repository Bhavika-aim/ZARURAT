// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white p-6 text-center mt-12">
      <p>&copy; {new Date().getFullYear()} Zarurat. All rights reserved.</p>
      <p className="mt-1 text-sm text-gray-200">Empowering education for underprivileged children.</p>
    </footer>
  );
};

export default Footer;
