import React, { useState, useEffect } from 'react';
import './AdvancedSidebar.css';

const AdvancedSidebar = ({ onVideoSelect }) => {
  const [openCourse, setOpenCourse] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await fetch('https://chvapps-backend.vercel.app/api/courses-internships');
      const data = await res.json();
      const courseItems = data.filter(item => item.type.toLowerCase() === 'course');
      const uniqueCourses = [...new Set(courseItems.map(item => item.name))];
      const groupedCourses = uniqueCourses.map(courseName => ({
        title: courseName,
        topics: [{ title: courseName }]
      }));
      setCourses(groupedCourses);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCourseClick = (courseTitle) => {
    setOpenCourse(openCourse === courseTitle ? null : courseTitle);
  };

  return (
    <div className="advanced-sidebar">
      <h3 className="advanced-sidebar-heading">Courses</h3>
      <ul className="advanced-sidebar-course-list">
        {courses.map((course, index) => (
          <li key={index}>
            <div
              className="advanced-sidebar-course-title"
              onClick={() => handleCourseClick(course.title)}
            >
              {course.title}
            </div>
            {openCourse === course.title && (
              <ul className="advanced-sidebar-topic-list">
                {course.topics.map((topic, idx) => (
                  <li
                    key={idx}
                    className="advanced-sidebar-topic-item"
                    onClick={() => onVideoSelect(topic)}
                  >
                    {topic.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdvancedSidebar;
