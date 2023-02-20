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
                <span className="highlight">Lorem ipsum dolor</span> sit amet
                consectetur adipisicing elit. Laborum repellat asperiores
                incidunt ipsam esse{" "}
                <a
                  className="desc-link"
                  href="www.google.com"
                  target="_blank"
                  rel="noreference"
                >
                  totam fugit ea facere
                </a>{" "}
                eaque optio nam nobis, impedit voluptate, quis commodi molestias
                error repellendus minus? Accusamus adipisci aliquid incidunt
                odit officiis qui labore dolor eligendi hic ea provident
                assumenda eveniet omnis debitis cumque, natus corrupti! Corporis
                omnis mollitia, adipisci sapiente corrupti quibusdam nobis
                voluptatibus dolor. Deserunt ullam corrupti tempora commodi
                voluptate officia voluptatibus dicta, rem cupiditate, quaerat
                quisquam molestiae. Consequatur enim nam, amet accusamus
                corrupti quos fugit atque autem. Hic exercitationem facilis
                natus explicabo aliquam.
              </p>

              <div className="download-section">
                <a
                  href="/files/resume.pdf"
                  download="Eren_Inanci_Resume.pdf"
                  className="download-btn"
                >
                  Download as PDF
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
              <h3 className="company">Company Name</h3>
              <h4 className="date">Jan 2021 - October 2022</h4>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt reprehenderit amet voluptas, aut nemo harum sunt
                accusantium facere repellat tempore non aliquam corporis in
                quod! Ratione quisquam quae quis explicabo. Aliquam soluta
                quisquam aspernatur magnam doloremque ex dolore possimus
                molestias maiores quo cupiditate facere explicabo amet quod
                beatae sunt, illo fugiat! Debitis in quos nostrum quisquam quae,
                cupiditate dolores fugiat.
              </p>
            </div>

            <div className="work-experience-item">
              <h3 className="company">Company Name</h3>
              <h4 className="date">Jan 2021 - October 2022</h4>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt reprehenderit amet voluptas, aut nemo harum sunt
                accusantium facere repellat tempore non aliquam corporis in
                quod! Ratione quisquam quae quis explicabo. Aliquam soluta
                quisquam aspernatur magnam doloremque ex dolore possimus
                molestias maiores quo cupiditate facere explicabo amet quod
                beatae sunt, illo fugiat! Debitis in quos nostrum quisquam quae,
                cupiditate dolores fugiat.
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
                  <div className="skill-item">
                    <p>Tailwind CSS</p>
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
                <h5 className="date dark-highlight">Jan 2021 - October 2022</h5>
              </div>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt reprehenderit amet voluptas, aut nemo harum sunt
                accusantium facere repellat tempore non aliquam corporis in
              </p>
            </div>
          </div>

          <div className="besides">
            <h2 className="title">Besides...</h2>
            <div className="activity-item">
              <h3 className="activity-name">Music</h3>
              <p className="activity">I love making music.</p>
            </div>
            <div className="activity-item">
              <h3 className="activity-name">Painting</h3>
              <p className="activity">I love painting.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
