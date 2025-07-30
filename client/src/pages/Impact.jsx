import React from "react";
import ToggleCard from "../components/ToggleCard";

const Impact = () => {
  return (
    <section className="grid gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-50">
      <ToggleCard title="📘 Rajasthan Book of Records">
        <p>
          Created portraits of Gandhi & Shastri with thumbprints of children on
          2nd Oct 2019.
        </p>
      </ToggleCard>

      <ToggleCard title="🧡 Limca Book of Records">
        <p>
          Largest origami bucket with 24,426 tricolour flowers made by kids and
          volunteers.
        </p>
      </ToggleCard>

      <ToggleCard title="🎓 Children in Top Institutions">
        <p>
          5 students selected in JNV. Others studying at IIT Kanchipuram,
          Rajiv Gandhi Medical College & more.
        </p>
      </ToggleCard>
    </section>
  );
};

export default Impact;
