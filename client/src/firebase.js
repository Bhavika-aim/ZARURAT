// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBB-vgxegkNoIgLx7XtreRX75eFlX1v6QA",
  authDomain: "zarurat-f4670.firebaseapp.com",
  projectId: "zarurat-f4670",
  storageBucket: "zarurat-f4670.firebasestorage.app",
  messagingSenderId: "304133273324",
  appId: "1:304133273324:web:d443e7dc7c71260deed7c9",
  measurementId: "G-BRRE3TG1VL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export {app};