import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <p>
          <span className="portfolio">
            <a
              href="https://github.com/ereninc/Portfolio-ReactJS"
              target="_blank"
              rel="noreferrer"
              className="portfolio-src"
            >
              Portfolio
            </a>
          </span>
          by
          <span>
            <a
              href="https://www.linkedin.com/in/ereninanci/"
              target="_blank"
              rel="noreferrer"
              className="linkedin"
            >
              Eren İnancı
            </a>
            , made with <span className="highlight">ReactJS</span>
          </span>
        </p>
      </div>
    </div>
  );
}
