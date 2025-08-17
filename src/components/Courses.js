import React from 'react';
import './Courses.css';

import jsCourseImage from '../images/js-course.jpg';
import reactCourseImage from '../images/react-course.jpg';
import pythonCourseImage from '../images/python-course.jpg';

const courses = [
  {
    id: 1,
    title: 'React Basics',
    image: reactCourseImage,
    link: '/courses/react-basics',
  },
  {
    id: 2,
    title: 'JavaScript Essentials',
    image: jsCourseImage,
    link: '/courses/javascript-essentials',
  },
  {
    id: 3,
    title: 'Python for Beginners',
    image: pythonCourseImage,
    link: '/courses/python-beginners',
  },
];

const Courses = () => {
  return (
    <div className="courses-container">
      {courses.map(course => (
        <a href={course.link} className="course-tile" key={course.id}>
          <img src={course.image} alt={course.title} className="course-image" />
          <div className="course-title">{course.title}</div>
        </a>
      ))}
    </div>
  );
};

export default Courses;