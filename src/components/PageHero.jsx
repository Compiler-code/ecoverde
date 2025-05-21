import React from 'react';
import '../CSS/globals.css';
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const PageHero = ( { destination, des, where } ) => {
  return (
    <section className={`page-hero ${where}`}>
      <img src="../../assets/Images/bg_1.jpg" alt="" />
      <div className="hero-content">
        <h1>
          <div><p>HOME</p> <FaChevronRight className="a" /> </div>
          <div><p>{ destination.toUpperCase() }</p> <FaChevronRight className="a" /></div>
        </h1>
        <h2>{ des }</h2>
        <Link className="cta-button" to="/contact">Contact Us</Link>
      </div>
    </section>
  );
};

export default PageHero;