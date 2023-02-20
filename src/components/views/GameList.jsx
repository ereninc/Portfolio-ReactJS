import React from "react";
import ProjectItem from "./ProjectItem";
import "../../styles/project-items/GameList.css";
import { v4 as uuidv4 } from "uuid";
import ProjectModal from "../modals/ProjectModal";

export default function GameList(props) {
  const projectList = props.projects;
  const [modalActive, setModalActive] = React.useState(props.modalState);

  //I could do this object but im bored
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalDescription, setModalDescription] = React.useState("");
  const [modalBgColor, setModalBgColor] = React.useState("");
  const [modalFirstImage, setModalFirstImage] = React.useState("");
  const [modalSecondImage, setModalSecondImage] = React.useState("");
  const [modalGooglePlayUrl, setModalGooglePlayUrl] = React.useState("");
  const [modalAppStoreUrl, setModalAppStoreUrl] = React.useState("");

  function handleClick(e) {
    setModalActive(true);
  }

  return (
    <>
      {modalActive ? (
        <ProjectModal
          type="game"
          active={modalActive}
          setModalActive={setModalActive}
          title={modalTitle}
          description={modalDescription}
          bgColor={modalBgColor}
          firstImage={modalFirstImage}
          secondImage={modalSecondImage}
          googlePlayUrl={modalGooglePlayUrl}
          appStoreUrl={modalAppStoreUrl}
          width="300px"
          height="600px"
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
            width="300px"
            height="600px"
            onClick={() => {
              setModalTitle(project.title);
              setModalDescription(project.description);
              setModalBgColor(project.bgColor);
              setModalFirstImage(project.firstImage);
              setModalSecondImage(project.secondImage);
              setModalGooglePlayUrl(project.googlePlayUrl);
              setModalAppStoreUrl(project.appStoreUrl);
              handleClick();
            }}
          />
        ))}
      </div>
    </>
  );
}
