import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBolt, FaArrowRight, FaCheck, FaEnvelope } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import './HomePage.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


function HomePage() {
  const [displayedWords, setDisplayedWords] = useState({ heading1: [], heading2: [], description: [] });
  const [buttonVisible, setButtonVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const fullText = {
    heading1: 'WELCOME TO CHVAPPS',
    heading2: 'We Build Ideas Driven by the Future',
    description: 'We understand the importance of financial Planning for individuals and businesses alike.',
  };

  useEffect(() => {
    let timeouts = [];

    const animateText = () => {
      const h1Words = fullText.heading1.split(' ');
      h1Words.forEach((word, i) => {
        timeouts.push(setTimeout(() => {
          setDisplayedWords(prev => ({ ...prev, heading1: [...prev.heading1, word] }));
        }, 500 + i * 300));
      });

      const h2Words = fullText.heading2.split(' ');
      h2Words.forEach((word, i) => {
        timeouts.push(setTimeout(() => {
          setDisplayedWords(prev => ({ ...prev, heading2: [...prev.heading2, word] }));
        }, 1000 + i * 250));
      });

      const descWords = fullText.description.split(' ');
      descWords.forEach((word, i) => {
        timeouts.push(setTimeout(() => {
          setDisplayedWords(prev => ({ ...prev, description: [...prev.description, word] }));
        }, 2700 + i * 200));
      });

      timeouts.push(setTimeout(() => {
        setButtonVisible(true);
      }, 2700 + descWords.length * 200 + 500));

      timeouts.push(setTimeout(() => {
        setDisplayedWords({ heading1: [], heading2: [], description: [] });
        setButtonVisible(false);
        setIndex(prev => prev + 1);
      }, 2700 + descWords.length * 200 + 3500));
    };

    animateText();

    return () => timeouts.forEach(t => clearTimeout(t));
  }, [index]);

  const navigate = useNavigate();
  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.home-section4-wrapper').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const projectCards = [
    {
      title: 'Heading 1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      points: ['On-Time Delivery', 'High Efficiency', 'Quality Assurance', 'Customer Satisfaction'],
      image: '/images/project3.webp'
    },
    {
      title: 'Living Lines',
      desc: 'This project is a feature-rich e-commerce website designed to provide seamless shopping experiences with modern UI, secure payments, and real-time inventory management.',
      points: ['Innovative Solutions', 'Cutting-Edge Tech', 'Scalable Designs', 'Robust Security'],
      image: '/images/show1.png'
    },
    {
      title: 'Aaiswarya Lakshmi',
      desc: 'This website is a modern women’s boutique platform showcasing elegant fashion collections, user-friendly design, and seamless online shopping experience.',
      points: ['User-Centric UI/UX', '24/7 Support', 'Cloud Integration', 'Agile Development'],
      image: '/images/show2.png'
    },
    {
      title: 'KidZee Babametta Pre-school',
      desc: 'This is a vibrant pre-school website designed to showcase the school’s programs, activities, and admissions information in a fun and engaging way for parents and children.',
      points: ['Interactive Design', 'SEO Optimization', 'Easy Navigation', 'Mobile Friendly'],
      image: '/images/show3.png'
    }

  ];

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

  useEffect(() => {
    const section = document.querySelector('.home-section7-wrapper');
    if (section) {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.classList.add('visible');
          } else {
            section.classList.remove('visible');
          }
        });
      }, { threshold: 0.2 });
      sectionObserver.observe(section);
      return () => sectionObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    const observers = [];
    projectCards.forEach((card, index) => {
      if (index === 0) return;
      const cardEl = document.querySelector('.card' + (index + 1));
      const prevCardEl = document.querySelector('.card' + index);
      if (cardEl) {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              cardEl.classList.add('active');
              if (prevCardEl) {
                prevCardEl.classList.remove('active');
                prevCardEl.classList.add('leave');
              }
            } else {
              cardEl.classList.remove('active');
              if (prevCardEl) {
                prevCardEl.classList.remove('leave');
                prevCardEl.classList.add('active');
              }
            }
          });

        }, { threshold: 0.1 });
        obs.observe(cardEl);
        observers.push(obs);
      }
    });
    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  const cards = [
    {
      image: '/images/ic1.svg',
      title: 'Deployment Services',
      desc: 'We denounce with righteous indignation & dislike men who are so beguiled'
    },
    {
      image: '/images/ic1.svg',
      title: 'Software Development',
      desc: 'We denounce with righteous indignation & dislike men who are so beguiled.'
    },
    {
      image: '/images/ic3.svg',
      title: 'Technology Solutions',
      desc: 'We denounce with righteous indignation & dislike men who are so beguiled.'
    },
    {
      image: '/images/ic4.svg',
      title: 'AI-Driven Insights',
      desc: 'We denounce with righteous indignation & dislike men who are so beguiled'
    }
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
    <div className="homepage-wrapper">
      <Navbar />

      <section className="background-art">
        <div className="semi-ring"></div>
        <div className="radial-bubble"></div>
        <div className="floating-bubbles">
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
        </div>

        <div className="overlay-content">
          <div className="left-side">
            <div className="left-section">
              <div className="small-heading">
                <div className="icon-circle">
                  <FaBolt className="thunder-icon" />
                </div>
                <span className="welcome-text">
                  {displayedWords.heading1.map((word, i) => (
                    <span key={i} className="spring-text">{word}&nbsp;</span>
                  ))}
                </span>
              </div>

              <h1 className="main-heading">
                {displayedWords.heading2.map((word, i) => (
                  <span key={i} className="spring-text">{word}&nbsp;</span>
                ))}
              </h1>
              <p className="description-text">
                {displayedWords.description.map((word, i) => (
                  <span key={i} className="spring-text">{word}&nbsp;</span>
                ))}
              </p>

              <div className="fixed-button-wrapper">
                <button
                  className={`get-started-btn ${buttonVisible ? 'spring-text' : 'hidden'}`}
                  onClick={() => handleLinkClick('/contact')} >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="right-side">
            <div className="right-section">
              <div className="images-container">
                <img src="/images/hs1.webp" alt="hs1" className="top-image spring-text" />
                <div className="bottom-images">
                  <img src="/images/hs2.webp" alt="hs2" className="left-bottom-image spring-text" />
                  <img src="/images/hs3.webp" alt="hs3" className="right-bottom-image spring-text" />
                </div>
                <div className="image-box">
                  <div className="circle-images">
                    <img src="/images/pic1.jpeg" alt="pic1" className="circle-pic spring-text" />
                    <img src="/images/pic2.jpeg" alt="pic2" className="circle-pic spring-text" />
                    <img src="/images/pic3.jpeg" alt="pic3" className="circle-pic spring-text" />
                    <img src="/images/pic4.jpeg" alt="pic4" className="circle-pic spring-text" />
                    <img src="/images/pic5.jpeg" alt="pic5" className="circle-pic spring-text" />
                    <img src="/images/pic6.jpeg" alt="pic6" className="circle-pic spring-text" />
                    <div className="circle-pic overlay-plus spring-text">+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="home-section2-wrapper">
        <div className="home-section2-header">Learning & Expertise</div>
        <div className="home-section2-title">Discover Our Unique Features</div>
        <div className={`home-section2-slider ${paused ? 'paused' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>
          {[...cards, ...cards].map((card, idx) => (
            <div key={idx} className="home-section2-card">
              <img src={card.image} alt={card.title} className="home-section2-image" />
              <h3 className="home-section2-card-title">{card.title}</h3>
              <p className="home-section2-card-desc">{card.desc}</p>
              <div className="home-section2-readmore" onClick={() => handleLinkClick('/contact')}>Read More <FaArrowRight /></div>
            </div>
          ))}
        </div>

      </section>

      <section className="home-section3-wrapper">
        <div className="home-section3-container">
          <h2 className="home-section3-heading">About Our Company</h2>
          <p className="home-section3-description">
            At CHVApps, we specialize in delivering high-quality, cost-effective IT solutions tailored to your business needs. We build scalable and innovative products that drive growth for startups and agencies. Our team combines deep industry expertise with cutting-edge technology to create solutions that not only meet but exceed your expectations.
            <br /><br />
            Whether you need a custom software solution, a seamless integration, or a mobile app that sets you apart from the competition, we have the skills and experience to bring your vision to life. We believe in collaboration, transparency, and delivering results that help your business thrive.
          </p>

        </div>
      </section>


      <section className="home-section5-wrapper">
        <div className="home-section5-container">
          <div className="home-section5-left">
            <h2 className="home-section5-heading">Advanced Digital Marketing & Web Solutions.</h2>
            <p className="home-section5-description">
              We offer top-tier web development services designed to elevate your online presence. Whether it’s designing a new website or optimizing your current one, we deliver custom solutions that align with your business goals.
            </p>
            <button className="home-section5-button" onClick={() => handleLinkClick('/contact')}>Check it out</button>
          </div>
          <div className="home-section5-right">
            <div className="home-section5-slideshow">
              <div className="home-section5-slides">
                <img src="/images/project1.webp" alt="Project 1" className="home-section5-slide" />
                <img src="/images/project2.webp" alt="Project 2" className="home-section5-slide" />
                <img src="/images/project3.webp" alt="Project 3" className="home-section5-slide" />
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="home-section4-wrapper">
        <div className="home-section4-heading-group">
          <div className="home-section4-label">Our Services</div>
          <div className="home-section4-title">Our Unique Services</div>
          <div className="home-section4-desc">
            Our team is dedicated to delivering exceptional IT solutions tailored to meet the unique needs of each client.
          </div>
        </div>
        <div className="home-section4-cards">
          {[
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
              icon: '/images/icon9.svg',
              heading: 'Android Development',
              desc: 'End-to-end Android app development to turn your ideas into mobile experiences.'
            },
            {
              number: '08',
              icon: '/images/icon10.svg',
              heading: 'iOS Development',
              desc: 'Crafting sleek and powerful iOS applications for seamless user experiences.'
            }
          ].map((card, i) => (
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


      <section className="home-section6-wrapper">
        <div className="home-section6-container">
          <h2 className="home-section6-heading">Experience the best workflow with us</h2>

          <div className="home-section6-row">
            <div className="home-section6-col home-section6-image-col">
              <img src="/images/security.webp" alt="Security" className="home-section6-image" />
            </div>
            <div className="home-section6-col home-section6-text-col">
              <h3 className="home-section6-subheading">Your web and data security, Our Priority</h3>
              <p className="home-section6-description">
                With a focus on secure authentication and password encryption, we ensure your user data is protected from unauthorized access. We implement industry-standard encryption measures to give you peace of mind.
              </p>
              <button className="home-section6-button" onClick={() => handleLinkClick('/contact')}>Check it out</button>
            </div>
          </div>

          <div className="home-section6-row">
            <div className="home-section6-col home-section6-text-col">
              <h3 className="home-section6-subheading">It’s a team of experienced and skilled people with distributions</h3>
              <p className="home-section6-description">
                Our team is made up of dedicated developers who work closely with you to ensure that your project is completed to your satisfaction. We emphasize communication, attention to detail, and meeting your specific requirements.
              </p>
              <button className="home-section6-button" onClick={() => handleLinkClick('/contact')}>Check it out</button>
            </div>
            <div className="home-section6-col home-section6-image-col">
              <img src="/images/team.webp" alt="Team" className="home-section6-image" />
            </div>
          </div>

        </div>
      </section>



      <div className="swiper-title"><h2 className="title">Our Client's Valuable feedback</h2>
        <div className="wrapper">


          <style>{`
        .wrapper { max-width: 1200px; margin: 0 auto; padding: 16px }
        .title { font-size: 28px; font-weight: 700; text-align: center; margin: 8px 0 20px }
        .grid { display: grid; grid-template-columns: 1fr; gap: 16px }
        .card { border: 1px solid #00ecd7; border-radius: 16px; overflow: hidden; box-shadow: 0 6px 24px rgba(0,0,0,.06); display: flex; flex-direction: column; background: #fff }
        .slideImg { width: 100%; height: 200px; object-fit: cover; display: block }
        .body { padding: 12px 14px 16px; display: flex; flex-direction: column; gap: 10px }
        .row { display: flex; align-items: center; justify-content: space-between; gap: 12px }
        .email { font-size: 14px; font-weight: 600; color: #111827; word-break: break-all }
        .stars { display: inline-flex; gap: 2px }
        .stars .filled { color: #f59e0b }
        .stars .empty { color: #e5e7eb }
        .review { font-size: 14px; line-height: 1.6; color: #374151 }
        .swiper { width: 100%; height: 100% }
        .swiper-wrapper { transition-timing-function: linear }

        @media (min-width: 768px) {
          .grid { grid-template-columns: repeat(2, 1fr) }
          .slideImg { height: 220px }
          .title { font-size: 30px }
        }

        @media (min-width: 1024px) {
          .grid { grid-template-columns: repeat(3, 1fr) }
          .slideImg { height: 240px }
          .title { font-size: 32px }
        }

        @media (max-width: 500px) {
          .wrapper { padding: 12px }
          .slideImg { height: 180px }
          .email { font-size: 13px }
          .review { font-size: 13px }
        }

        @media (max-width: 400px) {
          .wrapper { padding: 10px }
          .slideImg { height: 160px }
          .title { font-size: 22px }
          .email { font-size: 12px }
          .review { font-size: 12px }
        }
      `}</style>


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

      <section className="home-section7-wrapper">
        <div className="projects-background">
          <div className="saturn-ring ring1"></div>
          <div className="saturn-ring ring2"></div>
          <div className="floating-bubbles2">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
          </div>
        </div>
        <div className="projects-heading-group">
          <div className="projects-label">Our Projects</div>
          <div className="projects-title">Our Recent Projects</div>
          <div className="projects-desc">
            Our team is dedicated to delivering exceptional IT solutions tailored to meet the unique needs of each client.
          </div>
        </div>
        <div className="project-cards-container">
          {projectCards.map((card, idx) => (
            <div key={idx} className={'project-card card' + (idx + 1)}>
              <div className="project-card-left">
                <h3 className="project-card-title">{card.title}</h3>
                <p className="project-card-desc">{card.desc}</p>
                <ul className="project-points">
                  {card.points.map((point, pIdx) => (
                    <li key={pIdx}><FaCheck className="tick-icon" /> {point}</li>
                  ))}
                </ul>
                <button className="project-button" onClick={() => handleLinkClick('/contact')}>Check it out</button>
              </div>
              <div className="project-card-right">
                <img src={card.image} alt={'Project ' + (idx + 1)} className="project-image" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;