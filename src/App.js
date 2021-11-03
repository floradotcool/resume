import "./style.css";

import Header from "./sections/Header";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Projects from "./sections/Projects";

const Resume = () => {
  return (
    <div id="resume">
      <div className="paper">
        <Header />
        <main>
          <Experience />
          <Skills />
          <Education />
          <Projects />
        </main>
      </div>
    </div>
  );
};

export default Resume;
