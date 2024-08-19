import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/courses')
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;

