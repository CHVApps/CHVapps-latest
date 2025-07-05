import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Basics.css';

const courseData = [
  {
    title: 'Python Basics',
    videos: [
      { title: 'Introduction to Python', videoUrl: 'https://www.youtube.com/embed/_uQrJ0TkZlc' },
      { title: 'Variables & Data Types', videoUrl: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'Loops & Conditions', videoUrl: 'https://www.youtube.com/embed/6iF8Xb7Z3wQ' }
    ]
  },
  {
    title: 'Java Basics',
    videos: [
      { title: 'Java Introduction', videoUrl: 'https://www.youtube.com/embed/GoXwIVyNvX0' },
      { title: 'OOP Concepts', videoUrl: 'https://www.youtube.com/embed/8cm1x4bC610' },
      { title: 'Exception Handling', videoUrl: 'https://www.youtube.com/embed/5u2WqkJ8gds' }
    ]
  },
  {
    title: 'HTML & CSS',
    videos: [
      { title: 'HTML Basics', videoUrl: 'https://www.youtube.com/embed/qz0aGYrrlhU' },
      { title: 'CSS Basics', videoUrl: 'https://www.youtube.com/embed/1PnVor36_40' },
      { title: 'Responsive Design', videoUrl: 'https://www.youtube.com/embed/srvUrASNj0s' }
    ]
  }
];

const Basics = () => {
  return (
    <div className="basics-page">
      <Navbar />
      <div className="basics-layout">
        <Sidebar />
        <div className="basics-content-wrapper">
          {courseData.map((course, idx) => (
            <div key={idx} className="basics-course-section">
              <h3 className="basics-course-title">{course.title}</h3>
              <div className="basics-course-underline"></div>
              <div className="basics-video-grid">
                {course.videos.map((video, vidIdx) => (
                  <div key={vidIdx} className="basics-video-card">
                    <div className="basics-video-frame-wrapper">
                      <iframe
                        src={video.videoUrl}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="basics-video-title">{video.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Basics;
