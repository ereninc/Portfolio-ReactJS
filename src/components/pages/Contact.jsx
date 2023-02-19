import React from "react";
import { motion } from "framer-motion";
import ContactItem from "../views/ContactItem";
import "../../styles/Contact.css";

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
      <h1 className="contact-title">Let's get in touch!</h1>
      <p className="contact-desc">
        Feel free to contact me about any opportunity, or just to chat about
        gamedev, coding or anything else :)
      </p>
      <div className="contact-items">
        <ContactItem
          iconUrl="fas fa-user"
          url="https://ereninc.github.io/"
          desc="Eren İnancı"
        />
        <ContactItem
          iconUrl="fas fa-envelope"
          url="erencan_inanci@hotmail.com"
          desc="erencan_inanci@hotmail.com"
        />
        <ContactItem
          iconUrl="fab fa-linkedin"
          url="https://www.linkedin.com/in/ereninanci/"
          desc="linkedin.com/ereninanci"
        />
        <ContactItem
          iconUrl="fab fa-github"
          url="https://github.com/ereninc"
          desc="github.com/ereninc"
        />
        <ContactItem
          iconUrl="fas fa-gamepad"
          url="https://0xmemory.itch.io/"
          desc="0xmemory.itch.io"
        />
        <ContactItem
          iconUrl="fab fa-steam"
          url="https://steamcommunity.com/id/exwitcher_/"
          desc="steam.com/exwitcher"
        />
        <ContactItem
          iconUrl="fab fa-xbox"
          url="https://account.xbox.com/tr-tr/Profile?rtc=1&csrf=CsBkrDL4NMDKoW88V1kpi5rYrMHzEhIyBml26-9djNLJ_QokamTbPE9qc1JLaDMqpIX7AJYiwflBHZaIMa0KgrmqfPA1&wa=wsignin1.0"
          desc="xbox.com/exwitcher"
        />
      </div>
    </motion.div>
  );
}
