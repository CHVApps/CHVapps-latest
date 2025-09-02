import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import { FaRocket, FaLaptopCode, FaLightbulb, FaCogs, FaBullseye, FaEye } from "react-icons/fa";
import './About.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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

  const employees = [
    { image: "/images/emp1.jpg", name: "V Chandra Krishna", role: "CEO & Founder", message: "Leading the company with vision and strategy to drive success." },
    { image: "/images/emp2.jpg", name: "K Harsha", role: "CTO", message: "Crafting innovative technology solutions and overseeing technical development." },
    { image: "/images/emp3.jpg", name: "Joshi Sankar Telaprolu", role: "Trainer & Leads Generator" },
    { image: "/images/emp4.jpg", name: "Jutur Abhisheik", role: "Full Stack Developer" },
    { image: "/images/emp5.jpg", name: "M Soumya", role: "Full Stack Developer" },
    { image: "/images/emp6.jpg", name: "Puli Ganesh", role: "Full Stack Developer" },
    { image: "/images/emp7.jpg", name: "Yerramilli Satyanarayana Murthy", role: "Digital Marketing" },
    { image: "/images/emp8.jpg", name: "E Naveen Kumar", role: "Flutter Developer" },
    { image: "/images/emp9.jpg", name: "Devi Madamsetti", role: "Digital Marketing" },
    { image: "/images/emp11.jpg", name: "Swaroop", role: "Senior Digital Marketing" },
  ];

  const feedbacks = [
    {
      email: "linkfreight@gmail.com",
      images: ["/images/link-frieght1.png", "/images/link-frieght2.png", "/images/link-frieght3.png"],
      review: "We are extremely happy with the courier service platform CHV Apps developed for us. They provided a high-quality product at an affordable price, making our logistics operations seamless and efficient.",
      stars: 5
    },
    {
      email: "livinglines@gmail.com",
      images: ["/images/living-lines1.png", "/images/living-lines2.png", "/images/living-lines3.png"],
      review: "CHV Apps delivered an outstanding online shopping platform for our household items store. The product quality was top-notch, and the pricing was incredibly reasonable. Their service helped us grow our customer base in no time!",
      stars: 5
    },
    {
      email: "kidzeebabametta@gmail.com",
      images: ["/images/kidzee1.png", "/images/kidzee2.png", "/images/kidzee3.png"],
      review: "We couldn’t be happier with the preschool platform CHV Apps created for us. They delivered a perfect solution with great features, all at an affordable price. Their development team is exceptional!",
      stars: 5
    },
    {
      email: "mahaveer@gmail.com",
      images: ["/images/mahveer1.png", "/images/mahveer2.png", "/images/mahveer3.png"],
      review: "CHV Apps built a fantastic art supplies platform for us. The product exceeded our expectations, and they managed to deliver it within our budget without compromising on quality. Highly recommended!",
      stars: 5
    },
    {
      email: "taraskart@gmail.com",
      images: ["/images/taras-kart1.png", "/images/taras-kart2.png", "/images/taras-kart3.png"],
      review: "Thanks to CHV Apps, our online dress-selling platform is now live! The team created a beautiful, user-friendly site within our budget, and the results are incredible. We’re already seeing a great increase in sales!",
      stars: 5
    },
    {
      email: "srmarblesandgranites@gmail.com",
      images: ["/images/sr-marbles1.png", "/images/sr-marbles2.png", "/images/sr-marbles3.png"],
      review: "CHV Apps delivered an excellent marbles and granites platform for us. They managed to build a quality website with great features, all while sticking to our budget. It’s been a pleasure working with them!",
      stars: 5
    },
  ];

  function Stars({ count }) {
    const total = 5;
    return (
      <div className="stars" aria-label={`${count} out of 5 stars`}>
        {Array.from({ length: total }).map((_, i) => (
          <span key={i} className={i < count ? "filled" : "empty"}>★</span>
        ))}
      </div>
    );
  }


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
          </div>
        </div>
      </section>

      {/* CEO & CTO Cards */}
      <section className="ceo-cto-section">
        <div className="ceo-cto-cards">
          {employees.slice(0, 2).map((emp, index) => (
            <div className="ceo-cto-card" key={index}>
              <img src={emp.image} alt={emp.name} className="ceo-cto-img" />
              <div className="ceo-cto-info">
                <h3 className="ceo-cto-name">{emp.name}</h3>
                <p className="ceo-cto-role">{emp.role}</p>
                {emp.message && <p className="ceo-cto-message">{emp.message}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Employee Cards */}
      <section className="team-section-wrapper">
        <div className="team-section-container">
          {employees.slice(2).map((emp, index) => (
            <div className="team-card" key={index}>
              <img src={emp.image} alt={emp.name} className="team-img" />
              <div className="team-info">
                <h3 className="team-name">{emp.name}</h3>
                <p className="team-role">{emp.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section4" id="mission">
        <div className="about-section4-card">
          <FaBullseye className="about-section4-icon" />
          <h3 className="about-section4-title">Our Mission</h3>
          <p className="about-section4-desc">
            Our mission is to empower businesses with top-notch digital solutions that drive innovation, enhance productivity, and deliver measurable value to our clients worldwide.
          </p>
        </div>
        <div className="about-section4-card" id="vision">
          <FaEye className="about-section4-icon" />
          <h3 className="about-section4-title">Our Vision</h3>
          <p className="about-section4-desc">
            Our vision is to be a global leader in IT services by continuously evolving, embracing new technologies, and fostering meaningful partnerships that inspire progress.
          </p>
        </div>
      </section>

      <section className="about-section">
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

      <div className="swiper-title"><h2 className="title">Our Client's Valuable feedback</h2>
        <div className="wrapper">


          


          <div className="grid">
            {feedbacks.map((f, idx) => (
              <div className="card" key={idx}>
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={1}
                  loop
                  speed={3500}
                  autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
                >
                  {f.images.map((src, i) => (
                    <SwiperSlide key={i}>
                      <img className="slideImg" src={src} alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="body">
                  <div className="row">
                    <div className="email">{f.email}</div>
                    <Stars count={f.stars} />
                  </div>
                  <div className="review">{f.review}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
