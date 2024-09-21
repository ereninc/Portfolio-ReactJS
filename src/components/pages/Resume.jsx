import React from "react";
import { motion } from "framer-motion";
import "../../styles/Resume.css";
import Education from "../views/Education";
import Skills from "../views/Skills";
import WorkExperience from "../views/WorkExperience";

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
                guitar, midi controller, bass.
              </p>

              <div className="download-section">
                <a
                  href="/CV_Eren İnancı.pdf"
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
            <WorkExperience
              title="Hygge Studios - Game Developer"
              date="March 2023 to Current"
              desc="Small studio of 12 people in Estonia. Making Hybrid/Hyper casual games, 
              working on games core mechanics, UI programming, Shader programming, CPI videos."
            />

            <WorkExperience
              title="OGOPlay Studio - Game Developer"
              date="December 2022 to January 2023"
              desc="Worked in a small team of 3 people to develop a mobile game. I was
                responsible for the game's UI and UX, as well as the game's core
                mechanics. I also worked on the game's sound design. I used Unity and C#
                for the development. I used Reaper DAW to create the game's sound
                effects and music."
            />

            <WorkExperience
              title="Cube Games Studio - Game Developer"
              date="June 2021 to September 2022"
              desc="Started as a junior game developer, and then became a mid-level
                game developer. I worked on a variety of projects, I was
                responsible for the game's UI and UX, as well as the game's core
                mechanics. I used Unity and C# for the development. It was super
                developmental process for me. I learned a lot about game
                development and I had a lot of fun. I worked on custom shaders,
                particle systems, a little bit of mesh generation and
                deformation."
            />
          </div>

          <div className="skills">
            <h2 className="title">Skills</h2>
            <Skills />
          </div>

          <div className="education">
            <h2 className="title">Education</h2>
            <Education
              school="Sakarya University"
              degree="Computer Science"
              date="September 2018 to June 2021"
            />
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
