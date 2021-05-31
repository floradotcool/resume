import { h, Component } from "preact";
import styled from "styled-components";

import "./style.css";

import Header from "./sections/Header";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Projects from "./sections/Projects";

class Resume extends Component {
  render() {
    return (
      <div id="resume">
        <div class="paper">
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
  }
}

export default Resume;
