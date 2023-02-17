import React from "react";
import "../../styles/project-items/ProjectItem.css";

export default function ProjectItem(props) {
  return (
    <>
      <div
        onClick={props.onClick}
        className="project-item"
        style={{
          backgroundImage: `url(images/games/${props.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="project-item-title"
          style={{ backgroundColor: `${props.color}` }}
        >
          <h2>{props.title}</h2>
        </div>
      </div>
    </>
  );
}
