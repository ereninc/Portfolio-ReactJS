import React from "react";
import { motion } from "framer-motion";
import "../../styles/Resume.css";

export default function Resume() {
  //fuck that
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
      <div className="resume">
        <h1 className="page-title">Resume</h1>
        <div className="content">
          <div className="aboutme-section">
            <div className="text-section">
              <p className="small-desc">
                I'm a game developer and a web developer. I've worked as a Game
                Developer for 2 years in Mobile game industry. Now I'm working
                on my own pc games and I'm also working as a Freelance Front-End
                Developer in Istanbul, Turkey.
                <br></br>
                <br></br>I am currently looking for a job as a Game Developer or
                Front-End Developer.
                <br></br>
                <br></br> I'm also a musician, I play couple instruments such as
                guitar, piano, drums, bass.
              </p>

              <div className="download-section">
                <a
                  href="/resume.pdf"
                  // download="Eren_Inanci_Resume.pdf"
                  className="download-btn"
                  target="_blank"
                  rel="noreferrer"
                  title="Resume"
                >
                  <i className="fas fa-download"></i>Download as PDF
                </a>
              </div>
            </div>
            <div className="image-section">
              <img
                src="/images/test2.jpg"
                alt="my pixelated face"
                className="picture"
              />
            </div>
          </div>

          <div className="work-experiences">
            <h2 className="title">Work Experiences</h2>
            <div className="work-experience-item">
              <h3 className="company">OGO Play - Game Developer</h3>
              <h4 className="date">December 2022 - January 2023</h4>
              <p className="desc">
                Worked in a small team of 3 people to develop a mobile game. I
                was responsible for the game's UI and UX, as well as the game's
                core mechanics. I also worked on the game's sound design. I used
                Unity and C# for the development. I used Reaper DAW to create
                the game's sound effects and music.
              </p>
            </div>

            <div className="work-experience-item">
              <h3 className="company">Cube Games - Game Developer</h3>
              <h4 className="date">Jan 2021 - October 2022</h4>
              <p className="desc">
                Started as a junior game developer, and then became a mid-level
                game developer. I worked on a variety of projects, I was
                responsible for the game's UI and UX, as well as the game's core
                mechanics. I used Unity and C# for the development. It was super
                developmental process for me. I learned a lot about game
                development and I had a lot of fun. I worked on custom shaders,
                particle systems, a little bit of mesh generation and
                deformation.
              </p>
            </div>
          </div>

          <div className="skills">
            <h2 className="title">Skills</h2>
            <div className="skill-list">
              <div className="skill">
                <h3 className="skill-name">Languages</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <p>C#</p>
                  </div>
                  <div className="skill-item">
                    <p>Javascript</p>
                  </div>
                  <div className="skill-item">
                    <p>Typescript</p>
                  </div>
                  <div className="skill-item">
                    <p>C++</p>
                  </div>
                </div>
              </div>
              <div className="skill">
                <h3 className="skill-name">Gamedev</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <p>Unity</p>
                  </div>
                  <div className="skill-item">
                    <p>Blender</p>
                  </div>
                  <div className="skill-item">
                    <p>Photoshop</p>
                  </div>
                  <div className="skill-item">
                    <p>Reaper DAW</p>
                  </div>
                </div>
              </div>
              <div className="skill">
                <h3 className="skill-name">Tools&Frameworks</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <p>Visual Studio</p>
                  </div>
                  <div className="skill-item">
                    <p>VSCode</p>
                  </div>
                  <div className="skill-item">
                    <p>GIT</p>
                  </div>
                  <div className="skill-item">
                    <p>Jira/Trello</p>
                  </div>
                </div>
              </div>
              <div className="skill">
                <h3 className="skill-name">Web</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <p>HTML</p>
                  </div>
                  <div className="skill-item">
                    <p>CSS</p>
                  </div>
                  <div className="skill-item">
                    <p>React</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="education">
            <h2 className="title">Education</h2>
            <div className="education-item">
              <h3 className="school">Sakarya University</h3>
              <div className="info">
                <h4 className="degree">Computer Engineering</h4>
                {" - "}
                <h5 className="date dark-highlight">
                  September 2018 - June 2021
                </h5>
              </div>
              <p className="desc">
                I studied computer engineering at Sakarya University. <br></br>I
                learned a lot about computer science and engineering such as
                data structures, algorithms, computer architecture, operating
                systems, databases, computer networks, software engineering,
                etc. I also learned about web development, and I learned about
                HTML, CSS, Javascript. <br></br>
                <br></br> I learned about the basics of game development, I've
                decided to be a game developer at my senior year and developed
                12 games before I got the Junior Game Developer job at Cube
                Games. I've joined Game Development/Design club and got to met
                one of the most successful Turkish game developers.
              </p>
            </div>
          </div>

          <div className="besides">
            <h2 className="title">Besides...</h2>
            <div className="activity-item">
              <h3 className="activity-name">Music</h3>
              <p className="activity">
                I play guitar and midi controller, I use them for creating music
                for my games.
              </p>
            </div>
            <div className="activity-item">
              <h3 className="activity-name">Books</h3>
              <p className="activity">LOTR geek, Witcher series enjoyer.</p>
            </div>
            <div className="activity-item">
              <h3 className="activity-name">Games</h3>
              <p className="activity">
                Alan Wake is my favorite game of all time. And second is Wicher
                3.
              </p>
            </div>
            <div className="activity-item">
              <h3 className="activity-name">Learning</h3>
              <p className="activity">
                I enjoy learning new stuff, mostly tech stuff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
