import React from "react";
import "../../styles/project-items/ProjectItem.css";

export default function ProjectItem(props) {
  let itemType = props.type;

  return (
    <>
      <div
        onClick={props.onClick}
        className="project-item"
        style={{
          backgroundImage: `url(images/${props.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: `${props.width}`,
          height: `${props.height}`,
        }}
      >
        <div
          className="project-item-title"
          style={{ backgroundColor: `${props.bgColor}` }}
        >
          {itemType === "react" ? (
            <h2>
              {props.title}
              <span className="react">ReactJS</span>
            </h2>
          ) : (
            <h2>{props.title}</h2>
          )}
        </div>
      </div>
    </>
  );
}
