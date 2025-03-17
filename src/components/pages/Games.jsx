import React from "react";
import "../../styles/Games.css";
import GameList from "../views/GameList";
import SteamGameList from "../views/SteamGameList";
import gameData from "../../data/gameData.json";
import steamGameData from "../../data/steamGameData.json";
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
      <h1 className="game">About</h1>

      <p className="description">
      I am an experienced game developer specializing in core gameplay mechanics, UI implementation, visual effects, and level editor development. 
      In addition to refining game systems, I have expertise in creating high-quality CPI videos and handling the seamless release of games across various platforms.
      <br></br><br></br><br></br>Most recently, I released HEXAROMA, a cozy strategy city-builder, in collaboration with an U.S. based publisher on Steam. While my background includes mobile game development, my current focus is on PC and premium game experiences.

        <br></br>
        <br></br>You can explore my past projects below. Some have been published on the Google Play Store and Apple App Store, while others are still in development or prototypes. They are listed from newest to oldest.
      </p>
      <h1 className="game">Steam Games</h1>
      <SteamGameList projects={steamGameData} modalState={false} />
      <h1 className="game">Mobile Games</h1>
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
