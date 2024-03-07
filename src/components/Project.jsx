import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import projectphoto from '../assets/image/image_p1.png';

const Project = () => {
  return (
    <div className="project_main">
      <div id="project">
        <div className="aboutme1">
          <div className="aboutme">
            <div className="hr1">
              <hr />
            </div>
            <div className="aboutme-text">
              <h1>Featured Project</h1>
            </div>
            <div className="hr2">
              <hr />
            </div>
          </div>
        </div>
        <div className="project-section">
          <div className="project-image">
            <img src= {projectphoto} />
          </div>
          <div>
            <h1>Project Name</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet,Lorem ipsum dolor sit amet adipiscing elit.
            </p>
            <hr />
            <p>HTML CSS JS Figma React</p>
            <div className="icon-git">
              <FontAwesomeIcon className="icon1" icon={faGithub} />
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </div>
          </div>
        </div>
        <div className="project-section">
          <div>
            <h1>Project Name</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet,Lorem ipsum dolor sit amet adipiscing elit.
            </p>
            <hr />
            <p>HTML CSS JS Figma React</p>
            <div className="icon-git">
              <FontAwesomeIcon className="icon1" icon={faGithub} />
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </div>
          </div>
          <div className="project-image">
            <img src= {projectphoto} />
          </div>
        </div>
      </div>
      <div id="project1">
        <div className="aboutme1">
          <div className="aboutme">
            <div className="hr1">
              <hr />
            </div>
            <div className="aboutme-text">
              <h1>Other Project</h1>
            </div>
            <div className="hr2">
              <hr />
            </div>
          </div>
        </div>
        <div className="project-grid">
          <div className="other-project-section">
            <div className="project-image">
              <img src= {projectphoto} />
            </div>
            <div className="project-grid-description">
              <h3>Project Name</h3>
              <a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet,Lorem ipsum dolor sit amet adipiscing elit.
              </a>
              <hr />
              <p>HTML CSS JS Figma React</p>
              <div className="icon-git">
                <FontAwesomeIcon className="icon1" icon={faGithub} />
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </div>
            </div>
          </div>
          <div className="other-project-section">
            <div className="project-image">
              <img src= {projectphoto} />
            </div>
            <div className="project-grid-description">
              <h3>Project Name</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet,Lorem ipsum dolor sit amet adipiscing elit.
              </p>
              <hr />
              <p>HTML CSS JS Figma React</p>
              <div className="icon-git">
                <FontAwesomeIcon className="icon1" icon={faGithub} />
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </div>
            </div>
          </div>
          <div className="other-project-section">
            <div className="project-image">
              <img src= {projectphoto} />
            </div>
            <div className="project-grid-description">
              <h3>Project Name</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet,Lorem ipsum dolor sit amet adipiscing elit.
              </p>
              <hr />
              <p>HTML CSS JS Figma React</p>
              <div className="icon-git">
                <FontAwesomeIcon className="icon1" icon={faGithub} />
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </div>
            </div>
          </div>
          <div className="other-project-section">
            <div className="project-image">
              <img src= {projectphoto} />
            </div>
            <div className="project-grid-description">
              <h3>Project Name</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet,Lorem ipsum dolor sit amet adipiscing elit.
              </p>
              <hr />
              <p>HTML CSS JS Figma React</p>
              <div className="icon-git">
                <FontAwesomeIcon className="icon1" icon={faGithub} />
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
