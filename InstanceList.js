import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function InstanceList() {
  const { year, semester } = useParams();
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    fetch(`/api/instances/${year}/${semester}`)
      .then(response => response.json())
      .then(data => setInstances(data));
  }, [year, semester]);

  return (
    <div>
      <h2>Instances for {year} - Semester {semester}</h2>
      <ul>
        {instances.map(instance => (
          <li key={instance.id}>
            <Link to={`/instances/${year}/${semester}/${instance.course.id}`}>
              {instance.course.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InstanceList;
