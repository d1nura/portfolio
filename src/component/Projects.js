import React from "react";
import "../scss/projects.scss";
import movie from "../pics/movie.png";
import tic from "../pics/tic.png";
import comic from "../pics/c.png";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div id="projectGrid">
        <div id="projectItem">
          <div id="projectPic">
            <img src={comic} alt="web-pic"></img>
          </div>
          <h3>Comic store website</h3>
        </div>
        <div id="projectItem">
          <div id="projectPic">
            <img src={tic} alt="web-pic"></img>
          </div>
          <h3>Ticket booking website</h3>
        </div>
        <div id="projectItem">
          <div id="projectPic">
            <img src={movie} alt="web-pic"></img>
          </div>
          <h3>Movie finder website</h3>
        </div>
      </div>
    </div>
  );
}

export default Projects;
