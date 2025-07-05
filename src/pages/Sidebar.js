import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onVideoSelect }) => {
  const [openCourse, setOpenCourse] = useState(null);

  const courses = [
    {
      title: 'Python',
      topics: [
        { title: 'Introduction to Programming' },
        { title: 'Variables & Data Types' },
        { title: 'Conditional Statements' }
      ]
    },
    {
      title: 'Java',
      topics: [
        { title: 'Loops in Programming' },
        { title: 'Functions and Methods' },
        { title: 'OOPs Concepts' }
      ]
    },
    {
      title: 'Data Science',
      topics: [
        { title: 'Data Analysis' },
        { title: 'Pandas & Numpy' }
      ]
    },
    {
      title: 'Angular',
      topics: [
        { title: 'Getting Started' },
        { title: 'Components & Templates' }
      ]
    },
    {
      title: 'SQL',
      topics: [
        { title: 'Introduction to SQL' },
        { title: 'Joins & Subqueries' }
      ]
    },
    {
      title: 'Cyber Security',
      topics: [
        { title: 'Network Security' },
        { title: 'Ethical Hacking Basics' }
      ]
    },
    {
      title: 'HTML',
      topics: [
        { title: 'HTML Basics' },
        { title: 'Forms & Inputs' }
      ]
    },
    {
      title: 'CSS',
      topics: [
        { title: 'CSS Basics' },
        { title: 'Flexbox & Grid' }
      ]
    }
  ];

  const handleCourseClick = (courseTitle) => {
    setOpenCourse(openCourse === courseTitle ? null : courseTitle);
  };

  return (
    <div className="sidebar">
      <h3 className="sidebar-heading">Courses</h3>
      <ul className="sidebar-course-list">
        {courses.map((course, index) => (
          <li key={index}>
            <div
              className="sidebar-course-title"
              onClick={() => handleCourseClick(course.title)}
            >
              {course.title}
            </div>
            {openCourse === course.title && (
              <ul className="sidebar-topic-list">
                {course.topics.map((topic, idx) => (
                  <li
                    key={idx}
                    className="sidebar-topic-item"
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

export default Sidebar;
