import "./App.css";
import AboutMe from "./components/pages/AboutMe";
import Games from "./components/pages/Games";
import WebApps from "./components/pages/WebApps";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import Others from "./components/pages/Others";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Empty from "./components/Empty";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route exact path="/games" element={<Games />} />
          <Route exact path="/webapps" element={<WebApps />} />
          <Route exact path="/others" element={<Others />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Empty />
      </div>
      <Footer />
    </>
  );
}

export default App;
