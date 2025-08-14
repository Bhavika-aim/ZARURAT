import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [filterClass, setFilterClass] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "students"), (snapshot) => {
      setStudents(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const filtered = filterClass ? students.filter(s => s.class === filterClass) : students;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>

      <div className="mb-4">
        <input
          placeholder="Filter by Class"
          value={filterClass}
          onChange={e => setFilterClass(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        />
      </div>

      <div className="grid gap-4">
        {filtered.map(student => (
          <div key={student.id} className="border p-4 rounded shadow hover:shadow-lg flex justify-between items-center transition">
            <div>
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Class:</strong> {student.class}</p>
              <p><strong>Age:</strong> {student.age}</p>
              <p className="text-sm text-gray-500">Added by: {student.addedBy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
