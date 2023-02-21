import React from "react";

export default function WorkExperience(props) {
  return (
    <div className="work-experience-item">
      <h3 className="company">{props.title}</h3>
      <h4 className="date">{props.date}</h4>
      <p className="desc">{props.desc}</p>
    </div>
  );
}
