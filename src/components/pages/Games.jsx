import React from "react";
import "../../styles/Games.css";
import ProjectList from "../views/ProjectList";
import gameData from "../../data/gameData.json";

export default function Games() {
  return (
    <div className="games">
      <h1 className="hello">Games</h1>
      <p className="description">
        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
        ipsumLorem ipsum
      </p>
      <ProjectList projects={gameData} />
    </div>
  );
}
