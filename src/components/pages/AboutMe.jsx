import React from "react";
import "../../styles/AboutMe.css";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div
      className="about-me"
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0, y: -100, transition: { duration: 0.1 } }}
    >
      <h1 className="hello">Hello!</h1>
      <div className="me">
        <p className="text">
          It's Eren. I am a full stack developer with a{" "}
          <span className="highlight">Computer Science </span>
          background. I have a passion for learning and creating, it can be
          Software or Music.<br></br>
          <br></br> I am currently looking for a full time position as a{" "}
          <span className="highlight">Game Developer</span> or{" "}
          <span className="highlight">Front-End Developer</span>.
        </p>
        <img
          className="picture"
          src="https://scheefer.me/img/avatar.png"
          alt="my pixelated face"
        />
      </div>
    </motion.div>
  );
}
