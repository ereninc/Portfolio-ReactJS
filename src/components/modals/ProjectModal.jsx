import React from "react";
import "../../styles/modals/ProjectModal.css";

export default function ProjectModal(props) {
  let className = props.active ? "project-modal" : "project-modal.closed";
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
        <div className="store-buttons">
          <a href={props.googlePlayUrl} target="_blank" rel="noreferrer">
            <img
              src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
              alt=""
              className="store-button-google"
            />
          </a>
          <a href={props.appStoreUrl} target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png"
              alt=""
              className="store-button-apple"
            />
          </a>
        </div>
        <div className="image-gallery">
          <img
            className="gallery-image"
            src={props.firstImage}
            alt="my pixelated face"
            style={{ border: `2px solid ${props.bgColor}` }}
          />
          <img
            className="gallery-image"
            src={props.secondImage}
            alt="my pixelated face"
            style={{ border: `2px solid ${props.bgColor}` }}
          />
        </div>
      </div>

      <div className="project-modal-footer"></div>
    </div>
  );
}
