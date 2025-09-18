// src/pages/ChangePassword.jsx
import React, { useState } from 'react';
import { updatePassword } from 'firebase/auth';
import { auth } from '../firebase';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleChange = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        await updatePassword(user, password);
        setMsg('Password updated successfully!');
      } catch (err) {
        setMsg(`Error: ${err.message}`);
      }
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Change Password</h2>
      <input
        type="password"
        placeholder="New Password"
        className="border p-2 w-full mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleChange}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update Password
      </button>
      {msg && <p className="mt-2 text-green-600">{msg}</p>}
    </div>
  );
};

export default ChangePassword;
