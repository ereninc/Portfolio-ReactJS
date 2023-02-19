import React from "react";
import { motion } from "framer-motion";

export default function WebApps() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{
        x: "-100vw",
        opacity: 1,
        scale: 0,
        transition: { duration: 0.3 },
      }}
    >
      <h1>Will be updated</h1>
    </motion.div>
  );
}
