import React, { useState } from "react";

const ToggleCard = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-xl transition-all duration-300"
    >
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold text-purple-700">{title}</h2>
        <span className="text-purple-500 text-xl">
          {isOpen ? "-" : "+"}
        </span>
      </div>
      {isOpen && <p className="mt-2 text-gray-700 text-sm">{content}</p>}
    </div>
  );
};

const About = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">
        About Zarurat
      </h1>

      <div className="grid gap-4">
        <ToggleCard
          title="Our Story"
          content="Zarurat was founded on 20th November 2011 by Akriti Agrawal and 7 other students of JECRC to teach underprivileged children. What began as a small effort near the campus has grown into a structured movement with consistent volunteering and impactful events."
        />
        <ToggleCard
          title="Daily Schedule"
          content="Classes are held from Monday to Saturday between 4:00 PM and 5:30 PM at JECRC Foundation Campus. Volunteers provide academic and emotional support, nurturing every child."
        />
        <ToggleCard
          title="Our Vision"
          content="We aim to ensure every child receives basic education and values, helping them succeed in school admissions like JNV and fostering personal growth."
        />
        <ToggleCard
          title="Key Founders"
          content="Zarurat was initiated by Akriti Agrawal and 7 like-minded peers who believed education should reach beyond privileged boundaries."
        />
      </div>
    </div>
  );
};

export default About;
