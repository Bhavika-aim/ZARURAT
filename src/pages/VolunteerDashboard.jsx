// src/pages/VolunteerDashboard.jsx
import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const VolunteerDashboard = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", class: "", age: "" });
  const [editingId, setEditingId] = useState(null);
  const [filterClass, setFilterClass] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
        const q = query(collection(db, "students"), where("addedBy", "==", user.email));
        onSnapshot(q, (snapshot) => {
          setStudents(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.class || !form.age) return;
    const studentData = { ...form, addedBy: userEmail };

    if (editingId) {
      await updateDoc(doc(db, "students", editingId), studentData);
      setEditingId(null);
    } else {
      await addDoc(collection(db, "students"), studentData);
    }
    setForm({ name: "", class: "", age: "" });
  };

  const handleEdit = (student) => {
    setForm({ name: student.name, class: student.class, age: student.age });
    setEditingId(student.id);
  };

  const handleDelete = async (id) => await deleteDoc(doc(db, "students", id));

  const filtered = filterClass ? students.filter(s => s.class === filterClass) : students;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-purple-700">Volunteer Dashboard</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6 bg-white p-4 rounded shadow">
        <input placeholder="Student Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="border px-3 py-2 rounded" />
        <input placeholder="Class" value={form.class} onChange={e => setForm({ ...form, class: e.target.value })} className="border px-3 py-2 rounded" />
        <input placeholder="Age" type="number" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} className="border px-3 py-2 rounded" />
        <button type="submit" className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700">{editingId ? "Update Student" : "Add Student"}</button>
      </form>

      <div className="mb-4">
        <input placeholder="Filter by Class" value={filterClass} onChange={e => setFilterClass(e.target.value)} className="border px-3 py-2 rounded w-1/2" />
      </div>

      <table className="w-full table-auto bg-white rounded shadow">
        <thead className="bg-purple-600 text-white">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Class</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(student => (
            <tr key={student.id} className="text-center border-b">
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.class}</td>
              <td className="px-4 py-2">{student.age}</td>
              <td className="px-4 py-2 flex justify-center gap-2">
                <button onClick={() => handleEdit(student)} className="bg-yellow-500 px-2 py-1 rounded hover:bg-yellow-600">Edit</button>
                <button onClick={() => handleDelete(student.id)} className="bg-red-500 px-2 py-1 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VolunteerDashboard;
