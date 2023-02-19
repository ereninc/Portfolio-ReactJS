import React from "react";

export default function ContactItem(props) {
  return (
    <div>
      <img src={props.icon} alt="" />
      <a href={props.url}>{props.url}</a>
    </div>
  );
}
