import React, { useState } from 'react';
import Navbar from './Navbar';
import './PaymentPage.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://chvapps-backend.vercel.app/api';

function PaymentPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    mobile: '',
    email: '',
    amount: ''
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState('');
  const [popupTitle, setPopupTitle] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const formatAmountDisplay = (value) => {
    const num = Number(value);
    if (!value || Number.isNaN(num) || num <= 0) return '0';
    return num.toLocaleString('en-IN');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue
      }));
      setStatusMessage('');
      setStatusType('');
      return;
    }

    if (name === 'amount') {
      const numericValue = value.replace(/[^\d.]/g, '');
      const parts = numericValue.split('.');
      const sanitizedValue =
        parts.length > 2
          ? `${parts[0]}.${parts.slice(1).join('')}`
          : numericValue;

      setFormData((prev) => ({
        ...prev,
        [name]: sanitizedValue
      }));
      setStatusMessage('');
      setStatusType('');
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setStatusMessage('');
    setStatusType('');
  };

  const closePopup = () => {
    setPopupOpen(false);
    setPopupType('');
    setPopupTitle('');
    setPopupMessage('');
  };

  const openPopup = (type, title, message) => {
    setPopupType(type);
    setPopupTitle(title);
    setPopupMessage(message);
    setPopupOpen(true);
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve(true));
        existingScript.addEventListener('error', () => resolve(false));
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const validateForm = () => {
    const name = formData.full_name.trim();
    const mobile = formData.mobile.trim();
    const email = formData.email.trim().toLowerCase();
    const amount = Number(formData.amount);

    if (!name || !mobile || !email || !formData.amount) {
      setStatusType('error');
      setStatusMessage('Please fill all fields.');
      return false;
    }

    if (!/^[A-Za-z ]{2,150}$/.test(name)) {
      setStatusType('error');
      setStatusMessage('Please enter a valid full name.');
      return false;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setStatusType('error');
      setStatusMessage('Please enter a valid 10 digit mobile number.');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatusType('error');
      setStatusMessage('Please enter a valid email address.');
      return false;
    }

    if (Number.isNaN(amount) || amount <= 0) {
      setStatusType('error');
      setStatusMessage('Please enter a valid payment amount.');
      return false;
    }

    return true;
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (loading) return;

    setStatusMessage('');
    setStatusType('');
    closePopup();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const scriptLoaded = await loadRazorpayScript();

      if (!scriptLoaded) {
        setStatusType('error');
        setStatusMessage('Razorpay SDK failed to load.');
        setLoading(false);
        openPopup('error', 'Payment Failed', 'Unable to load the payment gateway. Please try again.');
        return;
      }

      const payload = {
        full_name: formData.full_name.trim(),
        email: formData.email.trim().toLowerCase(),
        mobile: formData.mobile.trim(),
        amount: Number(formData.amount)
      };

      const orderResponse = await fetch(`${API_BASE_URL}/payment-create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const orderData = await orderResponse.json();

      if (!orderResponse.ok) {
        throw new Error(orderData.message || 'Unable to create order.');
      }

      if (!orderData.key_id || !orderData.order_id || !orderData.amount || !orderData.currency) {
        throw new Error('Invalid payment response from server.');
      }

      let paymentCompleted = false;

      const options = {
        key: orderData.key_id,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'CHV Apps',
        description: `${orderData.course_name} Payment`,
        order_id: orderData.order_id,
        prefill: {
          name: orderData.full_name,
          email: orderData.email,
          contact: orderData.mobile
        },
        notes: {
          enrollment_id: orderData.enrollment_id,
          course_name: orderData.course_name,
          entered_amount: String(orderData.display_amount || '')
        },
        theme: {
          color: '#3fb8a9'
        },
        handler: async function (response) {
          try {
            const verifyResponse = await fetch(`${API_BASE_URL}/payment-verify`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            });

            const verifyData = await verifyResponse.json();

            if (!verifyResponse.ok || !verifyData.ok) {
              throw new Error(verifyData.message || 'Payment verification failed.');
            }

            paymentCompleted = true;
            setStatusType('success');
            setStatusMessage('Payment completed successfully.');
            setFormData({
              full_name: '',
              mobile: '',
              email: '',
              amount: ''
            });
            openPopup('success', 'Payment Successful', 'Our team will contact you shortly.');
          } catch (error) {
            setStatusType('error');
            setStatusMessage(error.message || 'Payment verification failed.');
            openPopup('error', 'Payment Failed', error.message || 'Payment verification failed. Please try again.');
          } finally {
            setLoading(false);
          }
        },
        modal: {
          ondismiss: async function () {
            if (paymentCompleted) return;

            try {
              await fetch(`${API_BASE_URL}/payment-mark-failed`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  enrollment_id: orderData.enrollment_id
                })
              });
            } catch {
            } finally {
              setLoading(false);
              setStatusType('error');
              setStatusMessage('Payment popup closed or payment not completed.');
              openPopup('error', 'Payment Not Completed', 'Payment was not completed. Please try again.');
            }
          }
        }
      };

      const razorpayInstance = new window.Razorpay(options);

      razorpayInstance.on('payment.failed', async function () {
        try {
          await fetch(`${API_BASE_URL}/payment-mark-failed`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              enrollment_id: orderData.enrollment_id
            })
          });
        } catch {
        } finally {
          setLoading(false);
          setStatusType('error');
          setStatusMessage('Payment failed. Please try again.');
          openPopup('error', 'Payment Failed', 'Your payment failed. Please try again.');
        }
      });

      razorpayInstance.open();
    } catch (error) {
      setLoading(false);
      setStatusType('error');
      setStatusMessage(error.message || 'Something went wrong.');
      openPopup('error', 'Payment Failed', error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Navbar />

      <div className="payment-page">
        <div className="payment-wrapper">
          <div className="payment-hero">
            <div className="payment-hero-text">
              <span className="payment-badge">Secure Enrollment</span>
              <h1>Complete Your Payment</h1>
              <p>
                Enter your details and continue with secure online payment through Razorpay.
              </p>
            </div>

            <div className="payment-hero-card">
              <div className="payment-hero-card-top">
                <span className="mini-label">Program</span>
                <h2>Internship Program</h2>
              </div>

              <div className="payment-price-row">
                <span>Entered Amount</span>
                <strong>₹{formatAmountDisplay(formData.amount)}</strong>
              </div>

              <div className="payment-price-row total">
                <span>Total Payable</span>
                <strong>₹{formatAmountDisplay(formData.amount)}</strong>
              </div>
            </div>
          </div>

          <div className="payment-content-card">
            <div className="payment-card-header">
              <div>
                <h2>Enrollment Details</h2>
                <p>Please fill in your details correctly before proceeding to payment.</p>
              </div>
            </div>

            <form onSubmit={handlePayment} className="payment-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="full_name">Full Name</label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    maxLength="10"
                    inputMode="numeric"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full-width">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full-width">
                  <label htmlFor="amount">Amount</label>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Enter payment amount"
                    inputMode="decimal"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="payment-bottom-bar">
                <div className="payment-total-box">
                  <span>Total Payable</span>
                  <strong>₹{formatAmountDisplay(formData.amount)}</strong>
                </div>

                <button type="submit" className="payment-btn" disabled={loading}>
                  {loading ? 'Processing...' : 'Proceed to Pay'}
                </button>
              </div>

              {statusMessage && (
                <div className={`payment-status ${statusType}`}>
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {popupOpen && (
        <div className="payment-popup-overlay" onClick={closePopup}>
          <div className={`payment-popup-card ${popupType}`} onClick={(e) => e.stopPropagation()}>
            <div className={`payment-popup-icon ${popupType}`}>
              {popupType === 'success' ? '✓' : '!'}
            </div>
            <h3>{popupTitle}</h3>
            <p>{popupMessage}</p>
            <button type="button" className="payment-popup-btn" onClick={closePopup}>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentPage;