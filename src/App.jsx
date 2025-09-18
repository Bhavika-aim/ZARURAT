// src/App.jsx
import React from "react";
import AppRoutes from "./routes"; // ✅ use routes.jsx

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppRoutes /> {/* ✅ central routing here */}
    </div>
  );
}

export default App;
