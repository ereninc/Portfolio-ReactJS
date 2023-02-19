import React from "react";
import "../../styles/project-items/ContactItem.css";

export default function ContactItem(props) {
  return (
    <div className="contact-item">
      <img src={props.icon} alt="" />
      <a href={props.url}>{props.url}</a>
    </div>
  );
}
