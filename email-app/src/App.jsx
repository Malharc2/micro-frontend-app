import React from "react";
import { Routes, Route } from "react-router-dom";
import EmailAppComponent from "./EmailAppComponent"; // ✅ Rename the imported component

const App = () => {  // ✅ Different name to avoid recursion
  return (
    <Routes>
      <Route path="/" element={<EmailAppComponent />} /> {/* ✅ No recursion */}
    </Routes>
  );
};

export default App; // ✅ Correct export
