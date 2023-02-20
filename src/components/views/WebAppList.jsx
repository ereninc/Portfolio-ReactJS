import React from "react";
import ProjectItem from "./ProjectItem";
import "../../styles/project-items/WebAppList.css";
import { v4 as uuidv4 } from "uuid";
import ProjectModal from "../modals/ProjectModal";

export default function WebAppList(props) {
  const projectList = props.projects;
  const [modalActive, setModalActive] = React.useState(props.modalState);

  const [modalTitle, setModalTitle] = React.useState("");
  const [modalDescription, setModalDescription] = React.useState("");
  const [modalBgColor, setModalBgColor] = React.useState("");
  const [modalFirstImage, setModalFirstImage] = React.useState("");
  const [modalSecondImage, setModalSecondImage] = React.useState("");
  const [modalGithubLink, setModalGithubLink] = React.useState("");
  const [modalWebPlatformLink, setModalWebPlatformLink] = React.useState("");

  function handleClick(e) {
    setModalActive(true);
  }

  return (
    <>
      {modalActive ? (
        <ProjectModal
          type="webapp"
          active={modalActive}
          setModalActive={setModalActive}
          title={modalTitle}
          description={modalDescription}
          bgColor={modalBgColor}
          firstImage={modalFirstImage}
          secondImage={modalSecondImage}
          githubLink={modalGithubLink}
          webPlatformLink={modalWebPlatformLink}
          width="500px"
          height="500px"
        />
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
            bgColor={project.bgColor}
            width="500px"
            height="500px"
            onClick={() => {
              setModalTitle(project.title);
              setModalDescription(project.description);
              setModalBgColor(project.bgColor);
              setModalFirstImage(project.firstImage);
              setModalSecondImage(project.secondImage);
              setModalGithubLink(project.githubLink);
              setModalWebPlatformLink(project.webPlatformLink);
              handleClick();
            }}
          />
        ))}
      </div>
    </>
  );
}
