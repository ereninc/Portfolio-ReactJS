import React from "react";
import skills from "../../data/skillData.json";

export default function Skills() {
  const skillList = skills;
  console.log(skillList);

  let langs;
  let gamedev;
  let tools;
  let web;

  skillList.map((skill) => {
    langs = skill.lang;
    gamedev = skill.gamedev;
    tools = skill.tools;
    web = skill.web;
  });

  const langList = langs.split(",");
  const gamedevList = gamedev.split(",");
  const toolsList = tools.split(",");
  const webList = web.split(",");

  return (
    <div className="skill-list">
      <div className="skill">
        <h3 className="skill-name">Languages</h3>
        <div className="skill-items">
          {langList.map((lang, i) => {
            return (
              <div className="skill-item" key={i}>
                <p>{lang}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="skill">
        <h3 className="skill-name">Gamedev</h3>
        <div className="skill-items">
          {gamedevList.map((gamedev, i) => {
            return (
              <div className="skill-item" key={i}>
                <p>{gamedev}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="skill">
        <h3 className="skill-name">Tools&Frameworks</h3>
        <div className="skill-items">
          {toolsList.map((tool, i) => {
            return (
              <div className="skill-item" key={i}>
                <p>{tool}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="skill">
        <h3 className="skill-name">Web</h3>
        <div className="skill-items">
          {webList.map((web, i) => {
            return (
              <div className="skill-item" key={i}>
                <p>{web}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
