import React, { useState } from "react";
import logo from "../assets/image/image2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const MobileMenu = () => {
  const [showBar, setShowBar] = useState(false);
  const [iconMenu, setIcon] = useState(faBars);
  const showBarFun = () => {
    setShowBar((prevState) => !prevState);
    setIcon((prevState) => (prevState === faBars ? faXmark : faBars));
  };
  return (
    <div className="mobile-div">
      <nav className="nav-mobile">
        <div className="icon-logo">
          <Link to="/">
            <img width="150px" height="70px" src={logo} alt="Logo" />
          </Link>
          <FontAwesomeIcon id="icon1" icon={iconMenu} onClick={showBarFun} />
        </div>
        <div
          id="showMobilemenu"
          style={{ display: showBar ? "block" : "none" }}
        >
          <ul className="menu">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/project">project</Link>
            </li>
            <li>
            <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to="/datafetch">Data Fetch</Link>
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
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
