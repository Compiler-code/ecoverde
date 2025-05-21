import React from 'react';
import "../CSS/globals.css";
import { FaMap, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="info">
        <FaMap className="icon" />
        <h4>Address:</h4>
        <p>198 West 21th Street, Suite 721 <br /> New York NY 10016</p>
      </div>
      <div className="line"></div>
      <div className="info">
        <FaPhoneAlt className="icon" />
        <h4>Phone:</h4>
        <a href="tel://2348034468887">+234 8034 4688 87</a>
      </div>
      <div className="line"></div>
      <div className="info">
        <FaPaperPlane className="icon" />
        <h4>Email:</h4>
        <a href="mailto:moses.goslash@gmail.com">info@ecoverde.com</a>
      </div>
    </div>
  )
}

export default ContactInfo