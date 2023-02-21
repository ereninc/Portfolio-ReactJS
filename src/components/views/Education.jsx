import React from "react";

export default function Education(props) {
  return (
    <div className="education-item">
      <h3 className="school">{props.school}</h3>
      <div className="info">
        <h4 className="degree">{props.degree}</h4>
        {" - "}
        <h5 className="date dark-highlight">{props.date}</h5>
      </div>
      <p className="desc">
        I studied computer engineering at Sakarya University. <br></br>I learned
        a lot about computer science and engineering such as data structures,
        algorithms, computer architecture, operating systems, databases,
        computer networks, software engineering, etc. I also learned about web
        development, and I learned about HTML, CSS, Javascript. <br></br>
        <br></br> I learned about the basics of game development, I've decided
        to be a game developer at my senior year and developed 12 games before I
        got the Junior Game Developer job at Cube Games. I've joined Game
        Development/Design club and got to met one of the most successful
        Turkish game developers.
      </p>
    </div>
  );
}
