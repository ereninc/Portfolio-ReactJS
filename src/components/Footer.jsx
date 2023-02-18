import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <p>
          <span className="portfolio">
            <a
              href="https://github.com/ereninc/ereninc.github.io"
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
          </span>
        </p>
      </div>
      {/* <div className="footer-right"></div> */}
    </div>
  );
}
