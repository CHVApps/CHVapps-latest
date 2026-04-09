import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Internship from './pages/Internship';
import Basics from './pages/Basics';
import Advanced from './pages/Advanced';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PaymentPage from './pages/PaymentPage';
import WhatsappIcon from './pages/WhatsappIcon';
import ChatbotIcon from './pages/ChatbotIcon';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/basics" element={<Basics />} />
        <Route path="/advanced" element={<Advanced />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <WhatsappIcon />
      <ChatbotIcon />
    </Router>
  );
}

export default App;