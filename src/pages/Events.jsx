// src/pages/Events.jsx
import React, { useState } from "react";
import ToggleCard from "../components/ToggleCard";

const Events = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const events = [
    {
      title: "🎉 Celebrating Innocence",
      content: (
        <ul className="list-disc list-inside">
          <li>Storytelling with Sonal Kaushal (Doraemon voice)</li>
          <li>Circus and carnival games</li>
          <li>Drum Circle</li>
          <li>Bal Bhojan (community meal)</li>
          <li>Chief Guests & Dignitaries</li>
        </ul>
      ),
    },
    {
      title: "🎁 Joy of Giving Week",
      content: (
        <ol className="list-decimal list-inside">
          <li>Science Park Visit</li>
          <li>Dental Check-up</li>
          <li>Paper Bag Workshop</li>
          <li>Science Exhibition</li>
          <li>Self Defence Session</li>
          <li>Bhangra Dance</li>
          <li>Goodies Distribution</li>
        </ol>
      ),
    },
    {
      title: "🎨 Regular Celebrations",
      content: (
        <ul className="list-disc list-inside">
          <li>Holi, Diwali, Christmas</li>
          <li>Library & Computer Lab Visits</li>
          <li>Sports Day</li>
        </ul>
      ),
    },
  ];

  return (
    <section className="grid gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-50">
      {events.map((event, index) => (
        <ToggleCard
          key={index}
          title={event.title}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        >
          {event.content}
        </ToggleCard>
      ))}
    </section>
  );
};

export default Events;
