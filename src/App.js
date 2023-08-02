import { React } from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./screens/Home";
import About from "./screens/About";
import Resume from "./screens/Resume";
import Skills from "./screens/Skills";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import Footer from "./components/Footer";

function App() {
  return (
   <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
   </Router>
  );
}

export default App;
