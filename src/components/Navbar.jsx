import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <NavLink exact="true" className="nav-item" to="/">
        About Me
      </NavLink>
      <NavLink exact="true" className="nav-item" to="/games">
        Games
      </NavLink>
      <NavLink exact="true" className="nav-item" to="/webapps">
        Web Projects
      </NavLink>
      <NavLink exact="true" className="nav-item" to="/resume">
        Resume
      </NavLink>
      <NavLink exact="true" className="nav-item" to="/contact">
        Contact
      </NavLink>
    </div>
  );
}
