import React, { useState } from "react";
import ProjectList from "./ProjectList";
import ProjectItems from "./ProjectItems";
import "./project.css";

const Projects = () => {
  const [projects, setProjects] = useState(ProjectItems);
  return (
    <div className="Prjects">
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
