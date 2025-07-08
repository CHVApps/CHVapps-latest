import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Popup from './Popup';
import './Advanced.css';

const Advanced = () => {
  const [courses, setCourses] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await fetch('https://chvapps-backend.vercel.app/api/courses-internships');
      const data = await res.json();
      const courseList = data.filter(item => item.type.toLowerCase() === 'course');
      setCourses(courseList);
    } catch (err) {
      setCourses([]);
    }
  };

  const getImageForCourse = (title) => {
    const normalized = title.toLowerCase();
    const keywordMap = {
      java: 'logo-java.webp',
      python: 'logo-python.png',
      javascript: 'logo-javascript.png',
      node: 'logo-node.png',
      react: 'logo-react.png',
      mysql: 'logo-mysql.png',
      postgresql: 'logo-postgresql.png',
      tailwind: 'logo-tailwind.png',
      typescript: 'logo-typescript.jpg',
      next: 'logo-nextjs.png',
      aws: 'logo-aws.png',
      docker: 'logo-docker.png',
      mongodb: 'logo-mongodb.png',
      golang: 'logo-golang.jpg',
      rust: 'logo-rust.webp',
      html: 'logo-html5.png',
      css: 'logo-css3.webp',
      swift: 'logo-swift.jpg',
      csharp: 'logo-C#.png',
      'c#': 'logo-C#.png',
      'c++': 'C++.png',
      express: 'logo-express.png',
      github: 'logo-github.png',
      kotlin: 'logo-kotlin.jpg'
    };

    for (const key in keywordMap) {
      if (normalized.includes(key)) {
        return `/images/courses/${keywordMap[key]}`;
      }
    }

    return null;
  };

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const matchedCourses = courses.filter(course => getImageForCourse(course.name));

  return (
    <div className="advanced-page">
      <Navbar />
      <div className="advanced-header">
        <h2 className="advanced-title">Advanced Courses</h2>
        <div className="advanced-underline"></div>
      </div>

      {matchedCourses.length > 0 ? (
        <div className="advanced-grid">
          {matchedCourses.map((course, index) => (
            <div key={index} className="advanced-card">
              <img
                src={getImageForCourse(course.name)}
                alt={course.name}
                className="advanced-card-image"
              />
              <h3 className="advanced-card-title">{course.name}</h3>
              <button className="advanced-card-button" onClick={handleOpenPopup}>
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-courses">
          <img src="/images/courses/coming-soon.png" alt="coming soon" className="no-courses-image" />
          <p className="no-courses-text">We will get back to you soon…</p>
        </div>
      )}

      {showPopup && <Popup onClose={handleClosePopup} />}
      <Footer />
    </div>
  );
};

export default Advanced;
