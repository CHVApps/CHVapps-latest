import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import './Gallery.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Gallery = () => {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const handleKnowMoreClick = () => {
        navigate('/contact'); 
    };
    const [items] = useState([
        "a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg",
        "a5.jpg", "a6.jpg", "a7.jpg", "a8.jpg"
    ]);
    const [revealClass, setRevealClass] = useState("");

    const features = [
        "Playgrounds", "Slides", "Swing Sets", "Climbing Walls", "Ball Pits",
        "Soft Play Areas", "Sandbox", "Trampolines", "Sports Zones",
        "Interactive Games", "Toys", "Creative Play", "Outdoor Fun", "Exploration Zones"
    ];

    const events = [
        {
            image: "father's_day_poster1.jpg",
            heading: "Father's Day Celebration",
            description: "A special day to honor fathers with fun games and activities for the kids."
        },
        {
            image: "bakrid_poster2.jpg",
            heading: "Bakrid Festival",
            description: "Celebrating the spirit of sacrifice with storytelling and creative activities."
        },
        {
            image: "yoga_day_poster3.jpg",
            heading: "International Yoga Day",
            description: "A day filled with calmness and mindfulness through fun yoga sessions."
        },
        {
            image: "environment_day_poster4.jpg",
            heading: "World Environment Day",
            description: "Learning the importance of nature through eco-friendly activities."
        },
        {
            image: "music_day_poster5.jpg",
            heading: "World Music Day",
            description: "A musical celebration with fun rhythm games and singing activities."
        },
        {
            image: "ocean_day_poster6.jpg",
            heading: "World Ocean Day",
            description: "Teaching kids the wonders of oceans and marine life through creative play."
        },
        {
            image: "food_day_poster7.jpg",
            heading: "World Food Day",
            description: "Exploring the world of food and nutrition through fun games and cooking activities."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % events.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [events.length]);

    useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#infra') {
        const target = document.getElementById('infra-gallery');
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth' });
            }, 300); 
        }
    }
}, []);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setRevealClass("reveal");
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="gallery-page">
            <Navbar />

            <section className="contact-banner-section">
  <div className="contact-banner-container">
    <img
      src="/Images/admission_banner.png"
      alt="Admission Banner"
      className="contact-banner-image"
    />
    <div className="contact-banner-content">
      <h1 className="contact-heading">Kidzee Preschool</h1>
      <h2 className="contact-subheading">Gallery</h2>
      {/* <button className="contact-enquire-button" onClick={handleKnowMoreClick}>Enquire Now</button> */}
    </div>
  </div>

  {/* Decorative images */}
  <img src="/Images/baloon.png" className="decor-image" style={{ top: '10%', left: '5%', width: '60px' }} alt="baloon" />
  <img src="/Images/mouse_img.png" className="decor-image" style={{ bottom: '10%', right: '5%', width: '50px', position: 'absolute' }} alt="mouse" />
  <img src="/Images/scale.png" className="decor-image" style={{ top: '20%', left: '70%', width: '60px', position: 'absolute' }} alt="scale" />
  <img src="/Images/bird.png" className="decor-image" style={{ top: '40%', left: '15%', width: '50px', position: 'absolute' }} alt="bird" />
  <img src="/Images/fruit_img.png" className="decor-image" style={{ bottom: '15%', right: '20%', width: '60px', position: 'absolute' }} alt="fruit" />
</section>


            <section id="fun-play-section" className="fun-play-section">
                <div className="fun-play-left-rotation">
                    <div className="wrapper">
                         <img src="/Images/btrfly_img.png" className="decor-image14" style={{ bottom: '10%', right: '10%', width: '60px',  }} alt="butterfly" />
                <img src="/Images/more_fish.png" className="decor-image15" style={{ top: '60%', left: '45%', width: '50px',  }} alt="fish" />
                        <div className="inner" style={{ '--quantity': items.length }}>
                            {items.map((img, index) => (
                                <div
                                    className="card1"
                                    key={index}
                                    style={{ '--index': index, '--color-card': '0, 123, 255' }}
                                >
                                    <img className="img1" src={`/Images/${img}`} alt={`unit1${index}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="fun-play-right-content">
                    <div className="feature-section">
                        <div className="feature-content">
                            <h1 className="feature-title">
                                Fun, Play, and Enjoyment for Kids
                            </h1>
                            <ul className={`feature-list animated ${revealClass}`}>
                                {features.map((item, i) => (
                                    <li className="feature-list-item" key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Gallery Section */}
            <section id="event-gallery" className="event-gallery-section">
                {/*<h2 className="section-heading">Events & Celebrations at Kidzee</h2>  */}
                <div className="event-gallery-container">
                     <img src="/Images/btrfly_img.png" className="decor-image14" style={{ bottom: '10%', right: '10%', width: '60px',  }} alt="butterfly" />
                <img src="/Images/more_fish.png" className="decor-image15" style={{ top: '60%', left: '45%', width: '50px',  }} alt="fish" />
                    {events.map((event, idx) => (
                        <div
                            key={idx}
                            className={`event-item ${index === idx ? 'active' : ''} ${idx % 2 === 0 ? 'left-layout' : 'right-layout'}`}
                        >
                            <div className="event-image-container">
                                <img
                                    src={`/Images/${event.image}`}
                                    alt={event.heading}
                                    className="event-image"
                                />
                            </div>
                            <div className="event-text-container">
                                <h3 className="event-heading">{event.heading}</h3>
                                <p className="event-description">{event.description}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </section>


            <section id="shapes-gallery" className="shapes-gallery-section">
                <h2 className="shapes-heading">Kid's Interactive Sessions</h2>
                
                <div className="shapes-container">
                    <div className="shape-wrapper">
                        <div className="shape-item circle">
                            <img src="/Images/shape2.jpg" alt="Expert Educators" className="shape-image circle" />
                        </div>
                        <p className="shape-info">Expert Educators</p>
                    </div>
                    <div className="shape-wrapper">
                        <div className="shape-item triangle">
                            <img src="/Images/shape1.jpg" alt="Safe and Secure" className="shape-image triangle" />
                        </div>
                        <p className="shape-info">Safe and Secure</p>
                    </div>
                    <div className="shape-wrapper">
                        <div className="shape-item square">
                            <img src="/Images/shape3.jpg" alt="Innovative Learning" className="shape-image square" />
                        </div>
                        <p className="shape-info">Innovative Learning</p>
                    </div>
                </div>
                
            </section>

            <section className="moving-gallery-section">
                <h2 className="moving-gallery-heading">Joyful Moments in Motion</h2>

                <div className="slider-container left-to-right">
                    <div className="slider-track">
                        {[...Array(10)].map((_, i) => (
                            <div className="slide" key={`lr-${i}`}>
                                <img src={`/Images/lr${i + 1}.jpg`} alt={`Kid Moment ${i + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="slider-container right-to-left">
                    <div className="slider-track">
                        {[...Array(10)].map((_, i) => (
                            <div className="slide" key={`rl-${i}`}>
                                <img src={`/Images/rl${i + 1}.jpg`} alt={`Kid Moment ${i + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>





            <section id="infra-gallery" className="infra-gallery-section">
                <h2 className="infra-gallery-heading">Our Vibrant Preschool Infrastructure</h2>
                <div className="infra-container">
                    <div className="infra-row">
                        {[...Array(4)].map((_, i) => (
                            <img src={`/Images/infra${i + 1}.jpg`} key={`top-${i}`} alt={`Top ${i + 1}`} className="infra-fence-image" />
                        ))}
                    </div>
                    <div className="infra-middle">
                        <div className="infra-column">
                            {[...Array(4)].map((_, i) => (
                                <img src={`/Images/infra${i + 5}.jpg`} key={`left-${i}`} alt={`Left ${i + 1}`} className="infra-fence-image" />
                            ))}
                        </div>
                        <div className="infra-video-grid">
                            <video className="infra-video" src="/Images/infra1.mp4" muted autoPlay loop playsInline />
                            <video className="infra-video" src="/Images/infra2.mp4" muted autoPlay loop playsInline />
                            <video className="infra-video" src="/Images/infra3.mp4" muted autoPlay loop playsInline />
                            <video className="infra-video" src="/Images/infra4.mp4" muted autoPlay loop playsInline />
                        </div>
                        <div className="infra-column">
                            {[...Array(4)].map((_, i) => (
                                <img src={`/Images/infra${i + 9}.jpg`} key={`right-${i}`} alt={`Right ${i + 1}`} className="infra-fence-image" />
                            ))}
                        </div>
                    </div>
                    <div className="infra-row">
                        {[...Array(4)].map((_, i) => (
                            <img src={`/Images/infra${i + 13}.jpg`} key={`bottom-${i}`} alt={`Bottom ${i + 1}`} className="infra-fence-image" />
                        ))}
                    </div>
                </div>
            </section>






            <Footer />
        </div>
    );
};

export default Gallery;
