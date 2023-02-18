import React from "react";
import { motion } from "framer-motion";

export default function Others() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0, y: -100, transition: { duration: 0.1 } }}
    >
      <h1>Will be updated</h1>
    </motion.div>
  );
}
