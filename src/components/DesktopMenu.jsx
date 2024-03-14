import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/image/image2.png";

const DesktopMenu = () => {
    return (
        <div className="desktop">
            <nav className="nav">
                <Link to="/">
                    <img width="150px" height="70px" src={logo} alt="Logo" />
                </Link>
                <ul className="menu">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link to="/project">Project</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
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
            </nav>
        </div>
    );
};

export default DesktopMenu;



// import React from 'react';
// import logo from "../assets/image/image2.png";
// const DesktopMenu = () => {
//     return (
//         <div className="desktop">
//         <nav className="nav">
//           <img width="150px" height="70px" src={logo} alt="Logo" />
//           <ul className="menu">
//             <li>
//               <a href="#about">About</a>
//             </li>
//             <li>
//               <a href="#experience">Experience</a>
//             </li>
//             <li>
//               <a href="#project">Project</a>
//             </li>
//             <li>
//               <a href="#contact">Contact</a>
//             </li>
//           </ul>
//           <ul className="button">
//             <li>
//               <button>Resume</button>
//             </li>
//             <li>
//               <button>Hire me</button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     );
// };

// export default DesktopMenu;