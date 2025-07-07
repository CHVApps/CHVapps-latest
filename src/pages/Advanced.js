import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AdvancedSidebar from './AdvancedSidebar';
import Popup from './Popup';
import './Advanced.css';

const courseData = [
  {
    title: 'Python Advanced',
    videos: [
      { title: 'Decorators & Generators', videoUrl: 'https://www.youtube.com/embed/8hQG7QlcLBk' },
      { title: 'Async Programming', videoUrl: 'https://www.youtube.com/embed/BI0asZuqFXM' },
      { title: 'Web Scraping', videoUrl: 'https://www.youtube.com/embed/XQgXKtPSzUI' }
    ]
  },
  {
    title: 'Java Advanced',
    videos: [
      { title: 'Spring Boot', videoUrl: 'https://www.youtube.com/embed/35EQXmHKZYs' },
      { title: 'Microservices', videoUrl: 'https://www.youtube.com/embed/1xo-0gCVhTU' },
      { title: 'Streams & Lambdas', videoUrl: 'https://www.youtube.com/embed/t1-YZ6bF-g0' }
    ]
  },
  {
    title: 'AI & ML',
    videos: [
      { title: 'Intro to AI', videoUrl: 'https://www.youtube.com/embed/7eh4d6sabA0' },
      { title: 'ML Basics', videoUrl: 'https://www.youtube.com/embed/GwIo3gDZCVQ' },
      { title: 'Deep Learning', videoUrl: 'https://www.youtube.com/embed/tPYj3fFJGjk' }
    ]
  },
  {
    title: 'Full Stack',
    videos: [
      { title: 'MERN Stack', videoUrl: 'https://www.youtube.com/embed/7CqJlxBYj-M' },
      { title: 'Deployment', videoUrl: 'https://www.youtube.com/embed/tn8pxJG9J6s' },
      { title: 'REST API', videoUrl: 'https://www.youtube.com/embed/fgTGADljAeg' }
    ]
  },
  {
    title: 'DevOps',
    videos: [
      { title: 'Docker Basics', videoUrl: 'https://www.youtube.com/embed/Gjnup-PuquQ' },
      { title: 'Kubernetes', videoUrl: 'https://www.youtube.com/embed/s_o8dwzRlu4' },
      { title: 'AWS CI/CD', videoUrl: 'https://www.youtube.com/embed/7V9T0lGhM68' }
    ]
  },
  {
    title: 'Cyber Security',
    videos: [
      { title: 'Pen Testing', videoUrl: 'https://www.youtube.com/embed/D-VkYFxU5C4' },
      { title: 'Network Security', videoUrl: 'https://www.youtube.com/embed/2fngvQS_PmQ' },
      { title: 'Incident Response', videoUrl: 'https://www.youtube.com/embed/7q7E6-SsA3o' }
    ]
  }
];

const Advanced = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="advanced-page">
      <Navbar />
      <div className="enroll-button-container">
        <button className="enroll-button" onClick={handleOpenPopup}>Enroll Now</button>
      </div>
      <div className="advanced-layout">
        
        <AdvancedSidebar />
        
        <div className="advanced-content-wrapper">
          {courseData.map((course, index) => (
            <div key={index} className="advanced-course-section">
              <h3 className="advanced-course-title">{course.title}</h3>
              <div className="advanced-course-underline"></div>
              <div className="advanced-video-grid">
                {course.videos.map((video, idx) => (
                  <div key={idx} className="advanced-video-card">
                    <iframe
                      width="100%"
                      height="180"
                      src={video.videoUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <p className="advanced-video-title">{video.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {showPopup && <Popup onClose={handleClosePopup} />}
      <Footer />
    </div>
  );
};

export default Advanced;
