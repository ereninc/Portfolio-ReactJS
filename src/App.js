import "./App.css";
import AboutMe from "./components/AboutMe";
import Games from "./components/Games";
import WebApps from "./components/WebApps";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AboutMe />} />
        <Route exact path="/games" element={<Games />} />
        <Route exact path="/webapps" element={<WebApps />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
