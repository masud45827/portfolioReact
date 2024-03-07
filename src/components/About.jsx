import React from 'react';
import profilephoto from '../assets/image/image3.jpg'
const About = () => {
    return (
        <div id="about">
        <div className="aboutme1">
          <div className="aboutme">
            <div className="hr1"><hr /></div>
            <div className="aboutme-text"><h1>About Me</h1></div>
            <div className="hr2"><hr /></div>
          </div>
          <div className="about-down">
            <div className="about-down-text">
              <p>
                I am a recent graduate from Bangabandhu Sheikh Mujibur Rahman
                Science and Technology University, specializing in Computer
                Science and Engineering.
              </p>
              <p>
                I have strong technical skills in languages such as C/C++, Python,
                Java, JavaScript, HTML, and CSS. I'm familiar with frameworks like
                React, Bootstrap, and Tailwind CSS. My experience extends to
                working with databases like MySQL and MongoDB. I am comfortable using
                Linux (Ubuntu) as my operating system and am proficient with tools
                like Git and GitHub. These technical skills allow me to navigate
                various aspects of software development with ease and contribute
                effectively to any team or project.
              </p>
              <p>
                I really enjoy solving problems, solved 3000+ Problems in Online
                Judges Codeforces, Codechef, Atcoder, LeetCode, CSES, Lightoj, and
                Hackerearth. In 2022, I worked with a team and got the 67th
                position at BUET IUPC-2022. In 2023, we achieved the 42th position
                at the SUST IUPC 2023. In 2023, we achieved the 97th position at
                the ICPC Dhaka regional programming contest. These experiences
                have not only made me better at analyzing and coding but also
                helped me appreciate overcoming challenges.
              </p>
            </div>
            <div className="about-down-picture">
              <img src={profilephoto} alt="My Picture" width="300px" height="300px" />
            </div>
          </div>
        </div>
      </div>
  
    );
};

export default About;