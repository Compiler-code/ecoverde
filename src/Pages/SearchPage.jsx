import React from 'react';
import PageHero from "../components/PageHero.jsx";
import SearchPanel from "../components/SearchPanel.jsx";
import SearchResults from "../components/SearchResults.jsx";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [ params ] = useSearchParams({});
  console.log(params.keys())

  return (
    <>
      <PageHero des="Search Results" destination="search" where="search" />
      <SearchPanel where="search" />
      <SearchResults queries={ params } />
    </>
  );
};

export default SearchPage;