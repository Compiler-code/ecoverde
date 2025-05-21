import React from 'react';
import PageHero from "../components/PageHero";
import SearchPanel from "../components/SearchPanel";
import FeaturedProperties from "../components/FeaturedProperties";

const PropertiesPage = () => {
  return (
    <>
      <PageHero des="Properties" destination="Properties" />
      <SearchPanel where="properties" />
      <FeaturedProperties where="properties" />
    </>
  );
};

export default PropertiesPage;