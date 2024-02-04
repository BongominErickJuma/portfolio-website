import React from "react";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div className="prject-preview" key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <button className="btn">
            <a href={project.url} target="_blank">
              View
            </a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
