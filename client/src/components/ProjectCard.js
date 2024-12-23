import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Link to={`/project/${project.id}`}>
        <button className="view-project-button">View Project</button>
      </Link>
    </div>
  );
}

export default ProjectCard;
