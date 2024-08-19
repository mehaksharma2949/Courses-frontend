import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`/api/courses/${id}`)
      .then(response => response.json())
      .then(data => setCourse(data));
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <ul>
        {course.instances.map(instance => (
          <li key={instance.id}>
            {instance.year} - Semester {instance.semester}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
