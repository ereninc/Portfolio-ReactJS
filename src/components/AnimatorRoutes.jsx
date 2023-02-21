import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Games from "./pages/Games";
import WebApps from "./pages/WebApps";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Others from "./pages/Others";
import { AnimatePresence } from "framer-motion";

export default function AnimatorRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<AboutMe />} />
        <Route exact path="/games" element={<Games />} />
        <Route exact path="/webapps" element={<WebApps />} />
        <Route exact path="/others" element={<Others />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
