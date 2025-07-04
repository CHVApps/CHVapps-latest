import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import { FaRocket, FaLaptopCode, FaLightbulb, FaCogs } from "react-icons/fa";
import './About.css';

function About() {
    const [activeButton, setActiveButton] = useState("about");
    const navigate = useNavigate();
    const handleLinkClick = (path) => {
  navigate(path);
  window.scrollTo(0, 0);
};


    const handleButtonClick = (section) => {
        setActiveButton(section);
        const sectionElement = document.getElementById(section);
        sectionElement.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="about">
            <Navbar />
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">Empowering Innovation Through Technology</h1>
                    <p className="about-hero-desc">
                        We bring ideas to life with passion, creativity, and cutting-edge technology. Our mission is to help businesses grow by building exceptional digital experiences.
                    </p>
                    <div className="about-hero-buttons">
                        <button className={activeButton === "mission" ? "active" : ""} onClick={() => handleButtonClick("mission")}>Our Mission</button>
                        <button className={activeButton === "vision" ? "active" : ""} onClick={() => handleButtonClick("vision")}>Our Vision</button>
                        <button className={activeButton === "values" ? "active" : ""} onClick={() => handleButtonClick("values")}>Our Values</button>
                    </div>
                </div>
            </section>




            <section className="home-section3-wrapper">
        <div className="home-section3-container">
          <div className="home-section3-left">
            <div className="home-section3-image-grid">
              <img src="/images/ab1.webp" alt="block1" className="home-section3-img top-left" />
              <img src="/images/ab1.webp" alt="block2" className="home-section3-img bottom-left" />
              <img src="/images/ab1.webp" alt="block3" className="home-section3-img middle-right" />
            </div>
          </div>
          <div className="home-section3-right">
            <h4 className="home-section3-subheading">About Our Company</h4>
            <h2 className="home-section3-heading">We provide perfect IT<br />solutions & technology for any<br />startups Agency's.</h2>
            <p className="home-section3-description">
              Deliver beautiful emails that get opened and clicked every time. Personalized content to every subscriber. Fully customizable templates. Build relationships that lead to conversions.
            </p>
            <div className="home-section3-feature">
              <img src="/images/ic5.svg" alt="feature icon" className="home-section3-feature-icon" />
              <div>
                <h5 className="home-section3-feature-title">Best Technical Solution</h5>
                <p className="home-section3-feature-desc">Nanotechnology immersion along the information high will close the loop on focusing solely</p>
              </div>
            </div>
            <button className="home-section3-btn" onClick={() => handleLinkClick('/contact')}>Get Our Services</button>
          </div>
        </div>
      </section>




            <section className="about-section" id="mission">
                <div className="about-card">
                    <FaRocket className="about-icon" />
                    <h3>Mission</h3>
                    <p>To deliver innovative and efficient digital solutions that drive success for businesses across industries.</p>
                </div>
                <div className="about-card">
                    <FaLaptopCode className="about-icon" />
                    <h3>Expertise</h3>
                    <p>From web development to AI-powered systems, our expertise covers a broad spectrum of technology solutions.</p>
                </div>
                <div className="about-card">
                    <FaLightbulb className="about-icon" />
                    <h3>Innovation</h3>
                    <p>We foster a culture of continuous learning and creativity to stay ahead in a rapidly evolving digital world.</p>
                </div>
                <div className="about-card">
                    <FaCogs className="about-icon" />
                    <h3>Support</h3>
                    <p>Our dedicated team provides end-to-end support, ensuring the seamless delivery and performance of every project.</p>
                </div>
            </section>

            

            <Footer />
        </div>
    );
}

export default About;
