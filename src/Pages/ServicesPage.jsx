import "../CSS/globals.css"
import React from 'react';
import PageHero from "../components/PageHero.jsx";
import FeaturesPanel from "../components/FeaturesDisplay.jsx";
import WorkFlow from "../components/WorkFlow.jsx";
import SpecialServices from "../components/SpecialServices.jsx";

const ServicesPage = () => {
  return (
    <>
      <PageHero destination="services" des="Services" />
      <FeaturesPanel ishome={ false } />
      <WorkFlow />
      <SpecialServices />
    </>
  );
};

export default ServicesPage;