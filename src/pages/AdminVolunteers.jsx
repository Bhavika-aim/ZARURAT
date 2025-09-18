// client\src\pages\AdminVolunteers.jsx
import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AdminVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const fetchVolunteers = async () => {
    const snapshot = await getDocs(collection(db, 'volunteers'));
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setVolunteers(data);
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const handleAddVolunteer = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      // Register user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // Add to Firestore
      await addDoc(collection(db, 'volunteers'), {
        email,
        uid,
        createdAt: new Date()
      });

      setEmail('');
      setPassword('');
      fetchVolunteers();
      alert('Volunteer added!');
    } catch (error) {
      console.error('Error adding volunteer:', error.message);
      setErrorMsg(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'volunteers', id));
      fetchVolunteers();
    } catch (error) {
      console.error('Error deleting volunteer:', error.message);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin: Manage Volunteers</h2>

      <form onSubmit={handleAddVolunteer} className="mb-6 bg-white shadow p-4 rounded">
        <h3 className="text-lg mb-2">Add Volunteer</h3>
        <input
          type="email"
          placeholder="Volunteer Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border px-3 py-2 mb-2"
        />
        <input
          type="password"
          placeholder="Set Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border px-3 py-2 mb-2"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Register Volunteer
        </button>
        {errorMsg && <p className="text-red-600 mt-2">{errorMsg}</p>}
      </form>

      <h3 className="text-lg font-semibold mb-2">Existing Volunteers</h3>
      <ul className="space-y-2">
        {volunteers.map((v) => (
          <li key={v.id} className="bg-gray-100 px-4 py-2 flex justify-between items-center">
            <span>{v.email}</span>
            <button
              onClick={() => handleDelete(v.id)}
              className="bg-red-600 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminVolunteers;
