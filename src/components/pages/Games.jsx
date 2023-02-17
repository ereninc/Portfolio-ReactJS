import React from "react";
import "../../styles/Games.css";
import ProjectList from "../views/ProjectList";
import gameData from "../../data/gameData.json";

export default function Games() {
  return (
    <div className="games">
      <h1 className="hello">Games</h1>
      <p className="description">
        Hyper/Hybrid Casual games that I have made. I have worked on different
        roles in the development of these games. I have worked as a programmer,
        designer, and producer. I have worked on the development of games for
        Android and iOS. <br></br>
        <br></br>You can visit the preview page by clicking on the project. Some
        have been published on the Google Play Store and the Apple App Store,
        some are still in development, and some are just prototypes.
      </p>
      <ProjectList projects={gameData} modalState={false} />
    </div>
  );
}
