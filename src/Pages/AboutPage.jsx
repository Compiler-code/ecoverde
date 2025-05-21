import React from 'react';
import "../CSS/globals.css";
import PageHero from "../components/PageHero.jsx";
import AboutEcoverde from "../components/AboutEcoverde.jsx";
import Statistics from "../components/Statistics.jsx";
import Testimonials from "../components/Testimonials.jsx";

const AboutPage = () => {
  return (
    <>
      <PageHero destination="about" des="About Us"  />
      <AboutEcoverde />
      <Statistics />
      <Testimonials />
    </>
  );
};

export default AboutPage;