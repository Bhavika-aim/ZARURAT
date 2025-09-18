// src/pages/Impact.jsx
import React, { useState } from "react";
import ToggleCard from "../components/ToggleCard";

const Impact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const cards = [
    {
      title: "📘 Rajasthan Book of Records",
      content: "Created portraits of Gandhi & Shastri with thumbprints of children on 2nd Oct 2019.",
    },
    {
      title: "🧡 Limca Book of Records",
      content: "Largest origami bucket with 24,426 tricolour flowers made by kids and volunteers.",
    },
    {
      title: "🎓 Children in Top Institutions",
      content: "5 students selected in JNV. Others studying at IIT Kanchipuram, Rajiv Gandhi Medical College & more.",
    },
  ];

  return (
    <section className="bg-gray-50 p-6">
      <h2 className="text-center text-2xl font-bold text-purple-700 mb-6">
        Through Zarurat, thousands of lives have been positively impacted
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <ToggleCard
            key={index}
            title={card.title}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {card.content}
          </ToggleCard>
        ))}
      </div>
    </section>
  );
};

export default Impact;
