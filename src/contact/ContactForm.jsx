import React from 'react';

const ContactForm = () => {
    return (
        <div id="message">
          <form >
            <label htmlFor="fname">Full name:</label><br />
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter full name"
            /><br />
            <label htmlFor="email">Email:</label><br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            /><br />
            <label htmlFor="message-text">Message:</label><br />
            <textarea
              id="message-text"
              name="messageText"
            ></textarea><br /><br />
          </form>
        </div>
    );
};

export default ContactForm;