import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Worksexperience from "./pages/Workexperience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certification";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router basename="/Resume">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/worksexperience" element={<Worksexperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
