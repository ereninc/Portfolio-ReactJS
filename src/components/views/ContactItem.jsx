import React from "react";
import "../../styles/project-items/ContactItem.css";

export default function ContactItem(props) {
  const isMail = props.iconUrl === "fas fa-envelope";
  return (
    <div className="contact-item">
      <i className={props.iconUrl}></i>
      <a
        className="links"
        href={isMail ? `mailto:${props.url}` : `${props.url}`}
      >
        {props.desc}
      </a>
    </div>
  );
}
