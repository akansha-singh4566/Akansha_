import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import ProjectsPage from "./routes/ProjectsPage";
import Contact from "./routes/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} /> {/* Lowercase path */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
