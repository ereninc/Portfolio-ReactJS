import React from "react";
import { motion } from "framer-motion";
import WebAppList from "../views/WebAppList";
import webAppData from "../../data/webAppData.json";

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
        Web projects that I have made.<br></br>
      </p>
      <WebAppList projects={webAppData} />
    </motion.div>
  );
}
