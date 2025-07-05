import React, { useState } from 'react';
import './AdvancedSidebar.css';

const AdvancedSidebar = ({ onVideoSelect }) => {
  const [openCourse, setOpenCourse] = useState(null);

  const courses = [
    {
      title: 'Python Advanced',
      topics: [
        { title: 'Advanced Python' },
        { title: 'Decorators & Generators' },
        { title: 'Async Programming' }
      ]
    },
    {
      title: 'Java Advanced',
      topics: [
        { title: 'Advanced Java' },
        { title: 'Spring Boot' },
        { title: 'Microservices' }
      ]
    },
    {
      title: 'AI & ML',
      topics: [
        { title: 'AI & ML Basics' },
        { title: 'Deep Learning' },
        { title: 'Model Deployment' }
      ]
    },
    {
      title: 'Full Stack',
      topics: [
        { title: 'Full Stack Development' },
        { title: 'React & Node' },
        { title: 'API Integration' }
      ]
    },
    {
      title: 'DevOps',
      topics: [
        { title: 'DevOps with AWS' },
        { title: 'CI/CD Pipelines' },
        { title: 'Docker & Kubernetes' }
      ]
    },
    {
      title: 'Cyber Security',
      topics: [
        { title: 'Cyber Security Advanced' },
        { title: 'Penetration Testing' },
        { title: 'Forensics' }
      ]
    }
  ];

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
