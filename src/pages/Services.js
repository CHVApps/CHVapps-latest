import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Services.css';
import { FaLightbulb, FaRocket, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const servicesData = [
    {
      number: '01',
      icon: '/images/icon1.svg',
      heading: 'Clean Code',
      desc: 'We focus on clean, maintainable code to ensure your website runs smoothly and efficiently.'
    },
    {
      number: '02',
      icon: '/images/icon2.svg',
      heading: 'Object Oriented',
      desc: 'Our solutions are designed with scalability and flexibility, adapting to your business needs.'
    },
    {
      number: '03',
      icon: '/images/icon3.svg',
      heading: '24h Service',
      desc: 'We’re available around the clock to help you with any website issues or updates.'
    },
    {
      number: '04',
      icon: '/images/icon4.svg',
      heading: 'Value for Money',
      desc: 'Affordable, high-quality solutions that deliver more value to your business.'
    },
    {
      number: '05',
      icon: '/images/icon5.svg',
      heading: 'Faster Response',
      desc: 'Quick responses and rapid development so your projects stay on track.'
    },
    {
      number: '06',
      icon: '/images/icon6.svg',
      heading: 'Cloud Support',
      desc: 'Seamless integration with cloud services to keep your website fast and secure.'
    },
    {
      number: '07',
      icon: '/images/icon7.svg',
      heading: 'Digital Marketing',
      desc: 'We create data-driven digital marketing strategies that help grow your business and reach new audiences.'
    },
    {
      number: '08',
      icon: '/images/icon9.svg',
      heading: 'Android Development',
      desc: 'End-to-end Android app development to turn your ideas into mobile experiences.'
    },
    {
      number: '09',
      icon: '/images/icon8.svg',
      heading: 'Web Development',
      desc: 'Modern, responsive, and dynamic web development tailored to your specific business needs and goals.'
    },
    {
      number: '10',
      icon: '/images/icon10.svg',
      heading: 'iOS Development',
      desc: 'Crafting sleek and powerful iOS applications for seamless user experiences.'
    }
  ];

  const extraFeatures = [
    {
      icon: <FaLightbulb />,
      title: 'Innovative Solutions',
      desc: 'Creative thinking combined with technical expertise to bring your ideas to life.'
    },
    {
      icon: <FaRocket />,
      title: 'Fast Delivery',
      desc: 'We ensure timely delivery without compromising quality and excellence.'
    },
    {
      icon: <FaHandshake />,
      title: 'Trusted Partnership',
      desc: 'Building long-term relationships with a commitment to your success.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security Focused',
      desc: 'We prioritize security at every step to protect your business and data.'
    }
  ];

  return (
    <div className="services-page">
      <Navbar />
      <section className="home-section4-wrapper visible">
        <div className="home-section4-heading-group">
          <div className="home-section4-label">Our Services</div>
          <div className="home-section4-title">Our Unique Services</div>
          <div className="home-section4-desc">
            Our team is dedicated to delivering exceptional IT solutions tailored to meet the unique needs of each client.
          </div>
          <div className="underline"></div>
        </div>
        <div className="home-section4-cards">
          {servicesData.slice(0, 6).map((card, i) => (
            <div key={i} className="home-section4-card" style={{ '--delay': `${i * 0.3}s` }}>
              <div className="home-section4-number">{card.number}</div>
              <img src={card.icon} alt={card.heading} className="home-section4-icon" />
              <div className="home-section4-content">
                <h3>{card.heading}</h3>
                <p>{card.desc}</p>
                <button className="readmore-btn" onClick={() => handleLinkClick('/contact')}>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="extra-services-section">
        <div className="extra-services-heading">
          <h2>More of What We Offer</h2>
          <div className="underline"></div>
        </div>
        <div className="extra-services-cards">
          {servicesData.slice(6).map((card, i) => (
            <div key={i} className="extra-services-card">
              <div className="extra-services-number">{card.number}</div>
              <img src={card.icon} alt={card.heading} className="extra-services-icon" />
              <div className="extra-services-content">
                <h3>{card.heading}</h3>
                <p>{card.desc}</p>
                <button className="readmore-btn" onClick={() => handleLinkClick('/contact')}>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-section1">
        <div className="services-heading">
          <h2>Why Choose Us</h2>
          <div className="underline"></div>
          <p className="services-section1-subdesc">
            We believe in delivering more than just services. We deliver value, innovation, and long-term partnership.
          </p>
        </div>
        <div className="services-section1-cards">
          {extraFeatures.map((feature, index) => (
            <div key={index} className="services-section1-card">
              <div className="services-section1-icon">{feature.icon}</div>
              <h3 className="services-section1-title">{feature.title}</h3>
              <p className="services-section1-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
