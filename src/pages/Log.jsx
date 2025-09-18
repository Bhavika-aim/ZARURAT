// src/pages/Log.jsx
import React, { useState } from "react";
import { auth, provider, db } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup, updatePassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Log = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();
  setErrorMsg("");
  const isVolunteer = email.endsWith("@jecrc.ac.in");

  if (isVolunteer) {
    if (password !== "zarurat@volunteer") {
      setErrorMsg("Incorrect shared password for volunteers.");
      return;
    }

    try {
      // ✅ Sign in directly (no Firestore check)
      await signInWithEmailAndPassword(auth, email, password);

      localStorage.setItem("userType", "volunteer");
      navigate("/volunteer-dashboard");

    } catch (error) {
      setErrorMsg("Login failed: " + error.message);
    }
  } else {
    setErrorMsg("Use Google Sign-In for non-volunteer login.");
  }
};



  const handleGoogleLogin = async () => {
    setErrorMsg("");
    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;
      if (email.endsWith("@jecrc.ac.in")) {
        setErrorMsg("Volunteers must login via email/password.");
        return;
      }
      localStorage.setItem("userType", "general");
      navigate("/connect-dashboard");
    } catch (error) {
      setErrorMsg("Google login failed: " + error.message);
    }
  };

  const handlePasswordChange = async () => {
    if (!newPassword) return setErrorMsg("Enter new password.");
    try {
      await updatePassword(auth.currentUser, newPassword);
      setNewPassword("");
      alert("Password updated successfully.");
    } catch (error) {
      setErrorMsg("Failed to change password: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Volunteer Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded" required />
          <input type="password" placeholder="Shared Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded" required />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Login / Register</button>
        </form>

        <div className="text-center text-sm my-4 text-gray-600">or</div>

        <button onClick={handleGoogleLogin} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Continue with Google</button>

        {localStorage.getItem("userType") === "volunteer" && (
          <div className="mt-6">
            <button onClick={() => setShowChangePassword(prev => !prev)} className="text-blue-600 text-sm underline">
              {showChangePassword ? "Cancel" : "Change Password"}
            </button>

            {showChangePassword && (
              <div className="mt-4">
                <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full px-4 py-2 border rounded mb-2" />
                <button onClick={handlePasswordChange} className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700">Update Password</button>
              </div>
            )}
          </div>
        )}

        {errorMsg && <div className="mt-4 text-red-600 text-sm text-center">{errorMsg}</div>}
      </div>
    </div>
  );
};

export default Log;
