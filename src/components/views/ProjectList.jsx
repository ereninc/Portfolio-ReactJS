import React from "react";
import ProjectItem from "./ProjectItem";
import "../../styles/project-items/ProjectList.css";
import { v4 as uuidv4 } from "uuid";
import ProjectModal from "../modals/ProjectModal";

export default function ProjectList(props) {
  const projectList = props.projects;
  const [modalActive, setModalActive] = React.useState(true);
  const [activeGame, setActiveGame] = React.useState({});

  function handleClick(e) {
    setModalActive(true);
  }

  return (
    <>
      {modalActive ? (
        <ProjectModal active={modalActive} setModalActive={setModalActive} />
      ) : (
        ""
      )}
      <div className="project-list">
        {projectList.map((project) => (
          <ProjectItem
            key={uuidv4()}
            title={project.title}
            url={project.url}
            alt={project.alt}
            color={project.color}
            onClick={handleClick}
          />
        ))}
      </div>
    </>
  );
}
