import React from 'react';
const Menu = () => {
    return (
        <div id="header">
        <div className="desktop">
          <nav className="nav">
            <img width="150px" height="70px" src="./public/image/image2.png" alt="Logo" />
            <ul className="menu">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <ul className="button">
              <li><button >Resume</button></li>
              <li><button >Hire me</button></li>
            </ul>
          </nav>
        </div>
      </div>   
    )
};

export default Menu;