import React from "react";
import "../scss/about.scss";

function About() {
  return (
    <div className="about">
      <h1>
        Dinura <br />
        Samarakoon
      </h1>
      <p>Front-End Dev</p>
      <section className="aboutSec">
        <p id="aboutText">
          I am a developer new to the industry who like to learn new
          technologies and to work in great projects. I would like to team up
          and give my best to get the job done. I'm passionate about coding and
          like to face new challenges. I would pick up any new programming
          language within days if that is necessary.
        </p>
        <div id="btnset">
          <button id="myCV">My CV</button>
          <a href="https://github.com/d1nura">
            <i className="fab fa-github"></i> github
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
