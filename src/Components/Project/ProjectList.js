import React from "react";
import { NavLink } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="row overflow-hidden flex-md-row mb-0 shadow-sm h-md-250 position-relative">
      {projects.map((project) => (
        <div
          className="w-100 rounded shadow mb-3 p-4 d-flex  flex-column position-static"
          key={project.id}
        >
          <h3 className="mb-3 h3 coral">{project.title}</h3>
          <p className="card-text mb-auto">{project.description}</p>
          <a
            href={project.url}
            className="nav-link gap-1 mt-3 icon-link-hover text-primary"
            target="_blank"
          >
            View
          </a>
        </div>
      ))}
      <div class="col-lg-6 col-xxl-4 my-5 mx-auto">
        <div class="d-grid gap-2">
          <button class="btn btn-outline-danger" type="button">
            <NavLink
              to="https://bongominerickjuma.github.io/portfolio-items/"
              className="nav-link"
              target="_blank"
            >
              View All Projects
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
