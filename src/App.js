import React from "react";
import "./App.scss";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
