/* eslint-disable no-constant-binary-expression */
import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchPanel = ( { where } ) => {
  const navigate = useNavigate();

  const search = () => {
    const items = document.querySelectorAll( ".item" );
    const keyword = document.getElementById( "keyword" );
    const propertyType = document.getElementById( "property-type" );
    const location = document.getElementById( "location" );
    const propertyRange = document.getElementById( "property-price-range" );

    items.forEach( item => {
      if ( item.value == "" ) {
        item.classList.add( "error" );
      } if ( item.value !== "" && item.classList.contains( "error" ) == true ) {
        item.classList.remove( "error" );
      }
    } );
    
    if (
      keyword.value != "" || null &&
      propertyType.value != "" || null &&
      location.value != "" || null &&
      propertyRange.value != "" || null
    ) {
      navigate( `/search?keyword=${keyword.value}&property-type=${propertyType.value}&location=${location.value}&property-range=${propertyRange.value}` );
    }
  };

  return (
    <div className={ `search-panel ${where}` }>
      <div className="header">
        <div className="fields">
          <div className="field">
            <p className="text">Keyword</p>
            <div className="joint">
              <FaSearch className="icon" />
              <input type="text" placeholder="Keyword" className="item" id="keyword" />
            </div>
          </div>
          <div className="field">
            <p className="text">Property Type</p>
            <select id="property-type" className="item">
              <option value="residence">Residence</option>
              <option value="commercial">Commercial</option>
              <option value="office">Office</option>
            </select>
          </div>
          <div className="field">
            <p className="text">Location</p>
            <div className="joint">
              <FaSearch className="icon" />
              <input type="text" placeholder="Location" className="item" id="location" />
            </div>
          </div>
          <div className="field">
            <p className="text">Price Limit</p>
            <select id="property-price-range" className="item">
              <option value="500000">₦ 500 000</option>
              <option value="1000000">₦ 1 000 000</option>
              <option value="2500000">₦ 2 500 000</option>
              <option value="7500000">₦ 7 500 000</option>
              <option value="10000000">₦ 10 000 000</option>
              <option value="25000000">₦ 25 000 000</option>
            </select>
          </div>
        </div>
        <button onClick={ () => search() }>Search</button>
      </div>
    </div>
  );
};

export default SearchPanel;