import React from "react";
import { motion } from "framer-motion";
import WebAppList from "../views/WebAppList";
import webAppData from "../../data/webAppData.json";
import "../../styles/WebApps.css";

export default function WebApps() {
  return (
    <motion.div
      className="games"
      initial={{ opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{
        x: "-100vw",
        opacity: 1,
        transition: { duration: 0.3 },
      }}
    >
      <h1 className="game">Web Projects</h1>
      <p className="description">
        Web projects that I have made. I just wanted to show biggest projects,
        for addition to that I have made dozens of landing pages, dashboard
        pages, UI components. Most of them are ReactJS but couple of them
        Vanilla JS. All publicly shared on{" "}
        <span>
          <a
            className="github"
            href="https://github.com/ereninc?tab=repositories"
            target="_blank"
            rel="noreference"
          >
            my Github page.
          </a>
        </span>{" "}
        <br></br>
        <br></br>
        You can check preview pages by clicking on the project.
      </p>
      <WebAppList projects={webAppData} />
    </motion.div>
  );
}
