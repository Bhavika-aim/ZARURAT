// src/pages/VolunteerDashboard.jsx
import React, { useEffect, useState } from 'react';
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const VolunteerDashboard = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: '', class: '', age: '' });
  const [editingId, setEditingId] = useState(null);
  const [filterClass, setFilterClass] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
        const q = query(collection(db, 'students'), where('addedBy', '==', user.email));
        onSnapshot(q, (snapshot) => {
          const studentList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setStudents(studentList);
        });
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.class || !form.age) return;

    const studentData = { ...form, addedBy: userEmail };
    if (editingId) {
      await updateDoc(doc(db, 'students', editingId), studentData);
      setEditingId(null);
    } else {
      await addDoc(collection(db, 'students'), studentData);
    }
    setForm({ name: '', class: '', age: '' });
  };

  const handleEdit = (student) => {
    setForm({ name: student.name, class: student.class, age: student.age });
    setEditingId(student.id);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'students', id));
  };

  const filtered = filterClass
    ? students.filter((s) => s.class === filterClass)
    : students;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Volunteer Dashboard</h2>

      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input
          placeholder="Student Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          placeholder="Class"
          value={form.class}
          onChange={(e) => setForm({ ...form, class: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          {editingId ? 'Update' : 'Add'} Student
        </button>
      </form>

      <div className="mb-4">
        <label>Filter by Class: </label>
        <input
          value={filterClass}
          onChange={(e) => setFilterClass(e.target.value)}
          className="border p-1 ml-2"
        />
      </div>

      <div className="space-y-2">
        {filtered.map((student) => (
          <div
            key={student.id}
            className="border p-3 rounded flex justify-between items-center"
          >
            <div>
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Class:</strong> {student.class}</p>
              <p><strong>Age:</strong> {student.age}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(student)}
                className="text-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(student.id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerDashboard;
