import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaEdit } from 'react-icons/fa';
import './Popup.css';

const Popup = ({ onClose, selectedCourse }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile_number: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, mobile_number, message } = formData;

    if (!name || !email || !mobile_number || !message) {
      setError('All fields are required');
      return;
    }

    setLoading(true);

    const dataToSend = {
      name,
      email,
      mobile_number,
      subject: selectedCourse,
      message,
      type: 'course',
      course: selectedCourse,
      internship: null
    };

    try {
      const response = await fetch('https://chvapps-backend.vercel.app/api/form-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
      });

      if (!response.ok) throw new Error('Failed to submit the form');

      setSubmitted(true);
      setError('');
      setFormData({ name: '', email: '', mobile_number: '', message: '' });
    } catch (err) {
      setError(`Error submitting the form: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>×</button>
        <section className="course-form-section">
          <div className="course-form-container">
            <h2>Apply for Course</h2>
            <div className="course-underline"></div>
            <p className="course-form-desc">You are applying for <strong>{selectedCourse}</strong>. Fill in your details below.</p>
            {!submitted ? (
              <form className="course-form" onSubmit={handleSubmit}>
                <div className="course-form-group">
                  <FaUser className="course-form-icon" />
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="course-form-group">
                  <FaEnvelope className="course-form-icon" />
                  <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="course-form-group">
                  <FaPhoneAlt className="course-form-icon" />
                  <input type="tel" name="mobile_number" placeholder="Your Mobile Number" value={formData.mobile_number} onChange={handleChange} required />
                </div>
                <div className="course-form-group">
                  <FaEdit className="course-form-icon" />
                  <input type="text" value={selectedCourse} disabled />
                </div>
                <div className="course-form-group">
                  <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="course-form-btn" disabled={loading}>
                  {loading ? (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "20px", height: "20px", border: "2px solid rgba(255, 255, 255, 0.5)", borderTop: "2px solid white", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
                      <span style={{ marginLeft: "10px" }}>Sending...</span>
                    </div>
                  ) : "Apply Now"}
                </button>
              </form>
            ) : (
              <div className="course-success-message">
                <p>Thank you for applying! We will get back to you soon.</p>
              </div>
            )}
            {error && <div className="course-error-message" style={{ color: "red" }}>{error}</div>}
          </div>
        </section>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Popup;
