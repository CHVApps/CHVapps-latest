import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Contact.css';
import {
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHandshake, FaLaptopCode,
  FaClock, FaUser, FaEdit
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile_number: '',
    subject: '',
    message: ''
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, mobile_number, subject, message } = formData;
    if (!name || !email || !mobile_number || !subject || !message) {
      setError('All fields are required');
      return;
    }
    try {
      const res = await fetch('https://chvapps-backend.vercel.app/api/form-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'contact',
          internship: null,
          course: null
        })
      });
      if (!res.ok) throw new Error('Failed to submit form');
      setSuccess('Message sent successfully!');
      setError('');
      setFormData({ name: '', email: '', mobile_number: '', subject: '', message: '' });
    } catch (err) {
      setError('Submission failed. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <div className="contact-page">
      <Navbar />
      <section className="contact-section1">
        <div className="contact-heading">
          <h2>Why You Should Contact Us!</h2>
          <div className="contact-underline"></div>
        </div>
        {/*<div className="contact-cards">
          <div className="contact-card">
            <FaHandshake className="contact-icon" />
            <h3 className="contact-card-title">Partnership Approach</h3>
            <p className="contact-card-desc">We believe in building long-term relationships and collaborating closely with our clients.</p>
          </div>
          <div className="contact-card">
            <FaLaptopCode className="contact-icon" />
            <h3 className="contact-card-title">Creative Solutions</h3>
            <p className="contact-card-desc">Our team brings creativity and technical excellence to every project we take on.</p>
          </div>
          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h3 className="contact-card-title">Responsive Support</h3>
            <p className="contact-card-desc">Quick responses and reliable assistance whenever you need us.</p>
          </div>
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3 className="contact-card-title">Easy Communication</h3>
            <p className="contact-card-desc">Reach us easily via phone or email and we’ll be happy to help.</p>
          </div>
        </div> */}
      </section>
      <section className="contact-section2">
        <div className="contact-section2-container">
          <div className="contact-info">
            <h3><FaMapMarkerAlt className="contact-info-icon" /> Our Office Address:</h3>
            <p>Ganesh theatre, opposite building,<br /> Tagarapuvalasa (531163), Visakhapatnam</p>
            <h3><FaEnvelope className="contact-info-icon" /> Email Address:</h3>
            <p>chvapps7@gmail.com</p>
            <h3><FaPhoneAlt className="contact-info-icon" /> Mobile Number:</h3>
            <p>+91 7396525262</p><br /> <p>+91 7075531402</p>
            <h3><FaClock className="contact-info-icon" /> Business Hours:</h3>
            <p>Monday – Friday: 9:00 AM – 6:00 PM (PST)<br />Saturday – Sunday: Closed</p>
          </div>
          <div className="contact-map">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.523746385073!2d83.438167!3d17.899850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39434e9a8e7b0f%3A0x6d3f6e1e54e8b8cb!2sTagarapuvalasa!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%" height="100%" style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </div>
      </section>
      <section className="contact-section3">
        <div className="contact-section3-container">
          <h2>Get In Touch</h2>
          <div className="contact-underline"></div>
          <p className="contact-form-desc">We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <FaUser className="contact-form-icon" />
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="contact-form-group">
              <FaEnvelope className="contact-form-icon" />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="contact-form-group">
              <FaPhoneAlt className="contact-form-icon" />
              <input type="tel" name="mobile_number" placeholder="Your Mobile Number" value={formData.mobile_number} onChange={handleChange} required />
            </div>
            <div className="contact-form-group">
              <FaEdit className="contact-form-icon" />
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="contact-form-group">
              <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="contact-form-btn">Send Message</button>
          </form>
          {success && <p className="success-message">{success}</p>}
          {error && <p className="error-message">{error}</p>}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
