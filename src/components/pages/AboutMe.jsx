import React from "react";
import "../../styles/AboutMe.css";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div
      className="about-me"
      initial={{ opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{
        x: "-100vw",
        opacity: 1,
        transition: { duration: 0.3 },
      }}
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
          src="/images/test2.jpg"
          alt="my pixelated face"
        />
      </div>
    </motion.div>
  );
}
