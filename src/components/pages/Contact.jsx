import React from "react";
import { motion } from "framer-motion";
import ContactItem from "../views/ContactItem";

export default function Contact() {
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
      <h1>Let's get in touch!</h1>
      <p>
        Feel free to contact me about any opportunity, or just to chat about
        gamedev, coding or anything else :)
      </p>
      <div className="contact-items">
        <ContactItem />
        <ContactItem />
        <ContactItem />
      </div>
    </motion.div>
  );
}
