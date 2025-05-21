import React from 'react';
import "../CSS/globals.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h3>If you got any questions<br />please do not hesitate to send us a message</h3>
      <form action="" method="get">
        <input type="text" placeholder="Your Name" name="name" id="name" required />
        <input type="email" placeholder="Your Email" name="email" id="email" required />
        <input type="text" placeholder="Subject" name="subject" id="subject" />
        <textarea name="message" placeholder="Your Message" id="message" required></textarea>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;