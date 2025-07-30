// src/pages/AdminDashboard.jsx

import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [filteredClass, setFilteredClass] = useState('');

  const fetchStudents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'students'));
      const studentList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStudents(studentList);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const filteredStudents = filteredClass
    ? students.filter(s => s.class === filteredClass)
    : students;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard - All Students</h2>
      <input
        type="text"
        placeholder="Filter by class (e.g. 3, 5A)"
        value={filteredClass}
        onChange={e => setFilteredClass(e.target.value)}
        className="mb-4 w-64 p-2 border border-gray-300 rounded"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStudents.map(student => (
          <div key={student.id} className="bg-white shadow rounded p-4">
            <h3 className="font-semibold text-lg">{student.name}</h3>
            <p className="text-sm text-gray-600">Class: {student.class}</p>
            <p className="text-sm text-gray-600">Age: {student.age}</p>
            <p className="text-sm text-gray-600">Volunteer: {student.volunteerEmail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
