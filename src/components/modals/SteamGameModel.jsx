import React from "react";
import "../../styles/modals/SteamGameModal.css";

export default function SteamGameModal(props) {
  let className = props.active ? "project-modal" : "project-modal.closed";
  let modalType = props.type;

  function handleClick() {
    props.setModalActive(false);
  }

  return (
    <div className={className}>
      <div
        className="project-modal-header"
        style={{ backgroundColor: `${props.bgColor}` }}
      >
        <h1 className="project-modal-title">{props.title}</h1>
        <button onClick={handleClick} className="project-modal-close-button">
          &times;
        </button>
      </div>
      <div className="project-modal-container">
        <p className="modal-description">{props.description}</p>
        {modalType === "webapp" ? (
          <div className="web-platform-links">
            <a
              target="_blank"
              rel="noreferrer"
              href={props.githubLink}
              className="check onGithub"
            >
              Check On Github!
            </a>
            <a
              href={props.webPlatformLink}
              target="_blank"
              rel="noreferrer"
              className="check onNetlify"
            >
              Check On Netlify!
            </a>
          </div>
        ) : (
          <div className="store-buttons">
            <a href={props.googlePlayUrl} target="_blank" rel="noreferrer">
              <img
                src="/images/steam-button.png"
                alt="SteamButton"
                className="store-button-steam"
              />
            </a>
          </div>
        )}

        <div className="image-gallery">
        <div className="gallery-item">
            <img
            className="gallery-image"
            src={props.firstImage}
            alt="Gallery Image 1"
            />
        </div>
        <div className="gallery-item">
            <img
            className="gallery-image"
            src={props.secondImage}
            alt="Gallery Image 2"
            />
        </div>
        </div>
      </div>

      <div
        className="project-modal-footer"
        style={{ backgroundColor: `${props.bgColor}` }}
      ></div>
    </div>
  );
}
