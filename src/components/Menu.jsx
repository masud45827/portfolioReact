import React, { useState } from "react";
import logo from "../assets/image/image2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const Menu = () => {
  const [showBar, setShowBar] = useState(false);
  const [iconMenu, setIcon] = useState(faBars);
 
  const showBarFun = ()=>{
    setShowBar(prevState => !prevState);
    setIcon(prevState => (prevState === faBars ? faXmark : faBars));
  }
  return (
    <div id="header">
      <div className="mobile-div">
        <nav className="nav-mobile">
          <div className="icon-logo">
            <img
              width="150px"
              height="70px"
              src={logo}
              alt="Logo"
            />
           <FontAwesomeIcon id="icon1" icon={iconMenu} onClick={showBarFun} />
          </div>
            <div id="showMobilemenu" style={{ display: showBar ? 'block' : 'none' }}>
              <ul className="menu">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#project">Project</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <ul className="button">
                <li>
                  <button >
                    Resume
                  </button>
                </li>
                <li>
                  <button>
                    Hire me
                  </button>
                </li>
              </ul>
            </div>
        </nav>
      </div>
      <div className="desktop">
        <nav className="nav">
          <img width="150px" height="70px" src={logo} alt="Logo" />
          <ul className="menu">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul className="button">
            <li>
              <button>Resume</button>
            </li>
            <li>
              <button>Hire me</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
