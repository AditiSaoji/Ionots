import React from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { id } = useParams(); // Get the project ID from the URL

  return (
    <div>
      <h1>Project {id}</h1>
      <p>This is the page for project {id}.</p> {/* Render the project ID */}
    </div>
  );
};

export default ProjectPage;
