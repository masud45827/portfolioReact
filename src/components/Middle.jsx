import React from 'react';
import middlephoto from '../assets/image/image.png'
const Middle = () => {
    return (
        <div id="middle-section">
        <h1>Hi, I'm Masud Ali</h1>
        <p>I design and build things.</p>
        <a href="#about">
          <img src={middlephoto} alt="Arrow" width="30px" height="30px" />
        </a>
      </div>
    );
};

export default Middle;