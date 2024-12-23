import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectAssignment = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/projects/1') // Replace '1' with dynamic candidateId
      .then((response) => setProjects(response.data))
      .catch((error) => console.error(error));
  }, []);

  const acceptProject = (projectId) => {
    axios.post('http://localhost:5000/projects/updateStatus', { projectId, status: 'Accepted' })
      .then(() => alert('Project Accepted'))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Assigned Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.projectId}>
            {project.projectName} - Status: {project.status}
            {project.status === 'Assigned' && (
              <button onClick={() => acceptProject(project.projectId)}>Accept</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectAssignment;
