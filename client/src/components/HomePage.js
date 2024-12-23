import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Ionots</h1>
      <button>
        <Link to="/project/1">View Project</Link> {/* Link to project ID 1 */}
      </button>
    </div>
  );
};

export default HomePage;
