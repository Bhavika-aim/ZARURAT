// src/components/ToggleCard.jsx
import React from "react";

const ToggleCard = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <button
        className="w-full text-left font-semibold text-lg flex justify-between items-center"
        onClick={onToggle}
      >
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="mt-2 text-gray-700">{children}</div>}
    </div>
  );
};

export default ToggleCard;
