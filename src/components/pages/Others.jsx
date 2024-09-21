import React from "react";
import { motion } from "framer-motion";

export default function Others() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{
        x: "-100vw",
        opacity: 1,
        transition: { duration: 0.3 },
      }}
    >
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Will be updated</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Level Editors for game specific, variety of Shaders both HLSL and Shader graphs, misc. game systems such as Save System, Input System, Extension classes and Helpers.</p>
    </motion.div>
  );
}
