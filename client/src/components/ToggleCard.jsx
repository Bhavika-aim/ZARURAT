// src/components/ToggleCard.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ToggleCard = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-zarurat-light rounded-2xl shadow-md p-4 transition-all duration-300 border-2 border-zarurat-dark">
      <button
        onClick={() => setOpen(!open)}
        className="text-zarurat-dark font-semibold text-xl w-full text-left"
      >
        {title}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mt-3 text-sm text-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToggleCard;
