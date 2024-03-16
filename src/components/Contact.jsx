// contactform

import React, { useState } from "react";
import ContactForm from "./contact/ContactForm";
import ContactFormText from "./contact/ContactFormText";
function Contact() {
  const [showMessage, setShowMessage] = useState(false);
  const [buttonText, setButtonText] = useState("Write Message");
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
        <div id="contact-button">
          {showMessage?<ContactForm/>:<ContactFormText/>}
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
