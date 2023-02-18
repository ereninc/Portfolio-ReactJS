import React from "react";
import "../../styles/AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div className="about-me">
        <h1 className="hello">Hello!</h1>
        <div className="me">
          <p className="text">
            I am a full stack developer with a background in CS degree. I have a
            passion for learning and creating. I am currently looking for a full
            time position as a Game Developer or Web Developer.
          </p>
          <img
            className="picture"
            src="https://scheefer.me/img/avatar.png"
            alt="my pixelated face"
          />
        </div>
      </div>
    </>
  );
}
