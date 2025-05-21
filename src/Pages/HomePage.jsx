import "../CSS/globals.css";
import React from 'react';
import Hero from "../components/Hero";
import SearchPanel from "../components/SearchPanel";
import FeaturedProperties from "../components/FeaturedProperties";
import OurAgents from "../components/OurAgents";
import WorkFlow from "../components/WorkFlow";
import FeaturesDisplay from "../components/FeaturesDisplay";

const HomePage = () => {
  return (
    <>
      <Hero where="home" />
      <SearchPanel where="home" />
      <FeaturesDisplay where="home" />
      <FeaturedProperties where="home" />
      <WorkFlow where="home" />
      <OurAgents where="home" />
    </>
  );
};

export default HomePage;