// contactform

import React, { useState } from "react";
import ContactForm from "./contact/ContactForm";
function Contact() {
  const [showMessage, setShowMessage] = useState(false);
  const [buttonText, setButtonText] = useState(" Write Message" );
  const showMessageBox = () => {
    console.log(buttonText);
    setShowMessage((prevState) => !prevState);
    setButtonText((prevText) =>
      prevText === "Write Message" ? "Send Message" : "Write Message"
    );
  };
  return (
    <div id="contact">
      <div className="aboutme1">
        <div className="aboutme">
          <div className="hr1">
            <hr />
          </div>
          <div className="aboutme-text">
            <h1>Contact</h1>
          </div>
          <div className="hr2">
            <hr />
          </div>
        </div>
        <div id="contact-text">
          <p>
            I am currently seeking employment, and I would appreciate it if you
            could contact me with any available job opportunities.
          </p>
        </div>
        <div id="contact-button">
          {showMessage && <ContactForm/>} 
          <button
            type="button"
            id="contact-button-inner"
            onClick={showMessageBox}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
