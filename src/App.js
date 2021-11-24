import React from 'react'
import Content from './components/Basic/Content'
import Navbar from './components/Basic/Navbar'
import "./components/style.css"
import "./components/about.css"
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import About from './components/Basic/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App
