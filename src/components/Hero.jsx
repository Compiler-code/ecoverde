import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <img src="../assets/Images/bg_1.jpg" alt="image" id="dynamic-bg" />
      <div className="text">
        <h3>Find Perfect</h3>
        <h3>House From Your Area</h3>
        <p>From as low as $20 A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
      </div>
      <Link className="link">View all properties</Link>
    </section>
  );
};

export default Hero;