import React from "react";
import ProjectItem from "./ProjectItem";
import "../../styles/project-items/ProjectList.css";

export default function ProjectList(props) {
  const projectList = props.projects;

  return (
    <div className="project-list">
      {projectList.map((project) => (
        <ProjectItem
          key={project.id}
          title={project.title}
          url={project.url}
          alt={project.alt}
          color={project.color}
        />
      ))}
    </div>
  );
}
