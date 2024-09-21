import React from "react";
import "../../styles/Games.css";
import GameList from "../views/GameList";
import gameData from "../../data/gameData.json";
import { motion } from "framer-motion";

export default function Games() {
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
      <h1 className="game">Games</h1>
      <p className="description">
        I am a seasoned game developer with a track record of enhancing core mechanics, 
        implementing and programming UIs, creating diverse visual effects, 
        and crafting level editors. Additionally, I excel in producing compelling 
        CPI videos and overseeing the seamless publication of games on various app stores. 
        I developed all the games below while working professionally with Product Managers,
        2D/3D Artists and Game Designers.
        <br></br>
        <br></br>You can visit the preview page by clicking on the project. Some
        have been published on the Google Play Store and the Apple App Store,
        some are still in development, and some are just prototypes.
        Chronologically newest to oldest.
      </p>
      <GameList projects={gameData} modalState={false} />

      <p className="footer-text">
        More on "
        <span className="link">
          <a
            href="https://0xmemory.itch.io/"
            target="_blank"
            rel="noreferrer"
            className="link itch"
          >
            itch.io
          </a>
        </span>
        " and "
        <span className="link">
          <a
            href="https://play.google.com/store/apps/dev?id=9082966488677640197"
            target="_blank"
            rel="noreferrer"
            className="link google-play"
          >
            Google Play
          </a>
        </span>
        " profile.
      </p>
      <span className="sub-text">
        (Even some stuff that i dont proud of 😂 )
      </span>
    </motion.div>
  );
}
