// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Zarurat | JECRC Foundation</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms</a>
          <a href="#" className="hover:text-gray-300">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
