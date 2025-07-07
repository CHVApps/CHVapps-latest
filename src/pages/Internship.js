import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Internship.css';
import { FaAndroid, FaGlobe, FaBullhorn, FaPalette, FaRobot, FaDatabase, FaUser, FaEnvelope, FaEdit } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

const Internship = () => {
  const internships = [
    { icon: <FaAndroid />, title: 'Android Development', desc: 'Learn to build modern Android applications using Kotlin and Java with real-world projects.' },
    { icon: <FaGlobe />, title: 'Web Development', desc: 'Master front-end and back-end technologies to create responsive and interactive websites.' },
    { icon: <FaBullhorn />, title: 'Digital Marketing', desc: 'Get hands-on experience in SEO, social media, and content marketing to grow businesses online.' },
    { icon: <FaPalette />, title: 'UI/UX Design', desc: 'Understand user-centered design principles and create visually appealing digital experiences.' },
    { icon: <FaRobot />, title: 'AI & Machine Learning', desc: 'Explore artificial intelligence, data science, and machine learning to solve real problems.' },
    { icon: <FaDatabase />, title: 'Data Analytics', desc: 'Learn to analyze data, generate insights, and make data-driven decisions for business growth.' }
  ];

  const [formData, setFormData] = useState({ name: '', email: '', mobile_number: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, mobile_number, subject, message } = formData;

    if (!name || !email || !mobile_number || !subject || !message) {
      setError('All fields are required');
      return;
    }

    setLoading(true);

    const dataToSend = {
      name,
      email,
      mobile_number,
      subject,
      message,
      type: 'internship',
      internship: subject,
      course: null
    };

    try {
      const response = await fetch('http://localhost:5000/api/form-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
      });

      if (!response.ok) throw new Error('Failed to submit the form');

      setSubmitted(true);
      setError(null);
      setFormData({ name: '', email: '', mobile_number: '', subject: '', message: '' });
    } catch (err) {
      setError(`Error submitting the form: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="internship-page">
      <Navbar />

      <section className="internship-cards-section">
        <div className="internship-heading">
          <h2>We Offer</h2>
          <div className="internship-underline"></div>
        </div>
        <div className="internship-cards-grid">
          {internships.map((item, index) => (
            <div className="internship-card" key={index}>
              <div className="internship-icon">{item.icon}</div>
              <h3 className="internship-title">{item.title}</h3>
              <p className="internship-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="internship-form-section">
        <div className="internship-form-container">
          <h2>Apply for Internship</h2>
          <div className="internship-underline"></div>
          <p className="internship-form-desc">Fill out the form below to apply for one of our exciting internship opportunities. We’ll get back to you as soon as possible.</p>
          {!submitted ? (
            <form className="internship-form" onSubmit={handleSubmit}>
              <div className="internship-form-group">
                <FaUser className="internship-form-icon" />
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="internship-form-group">
                <FaEnvelope className="internship-form-icon" />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="internship-form-group">
                <FaPhone className="internship-form-icon" />
                <input type="tel" name="mobile_number" placeholder="Your Mobile Number" value={formData.mobile_number} onChange={handleChange} required />
              </div>
              <div className="internship-form-group">
                <FaEdit className="internship-form-icon" />
                <select name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select Internship</option>
                  <option value="Android Development">Android Development</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="Data Analytics">Data Analytics</option>
                </select>
              </div>
              <div className="internship-form-group">
                <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="internship-form-btn" disabled={loading}>
                {loading ? (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "20px", height: "20px", border: "2px solid rgba(255, 255, 255, 0.5)", borderTop: "2px solid white", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
                    <span style={{ marginLeft: "10px" }}>Sending...</span>
                  </div>
                ) : "Apply Now"}
              </button>
            </form>
          ) : (
            <div className="internship-success-message">
              <p>Thank you for applying! We will get back to you soon.</p>
            </div>
          )}
          {error && <div className="internship-error-message" style={{ color: "red" }}>{error}</div>}
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Internship;
