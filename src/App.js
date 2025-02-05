import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<movielist />} />
        <Route path="/movie/:id" element={<movieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
