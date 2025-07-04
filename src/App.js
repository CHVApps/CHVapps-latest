import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Footer from './pages/Footer';
import Internship from './pages/Internship';
import './App.css';

function App() {
  return (
    <Router>
      {/*<PopupCard /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/internship" element={<Internship />} />

      </Routes>
    </Router>
  );
}

export default App;
