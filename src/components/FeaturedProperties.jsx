/* eslint-disable react/prop-types */
import "../CSS/globals.css";
import { FaLink } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { db } from "../../assets/Data/script";

const FeaturedProperties = ( { where } ) => {
  const [ properties, setProperties ] = useState( [] );

  useEffect( () => {
    setProperties(
      [...db["properties"][0], ...db["properties"][1]]
    );
  }, [] );

  console.log(properties)

  return (
    <div className={ `featured-properties ${where}` } id="scrollable">
      <div className="header-text">
        <div className="top">
          <div className="line"></div>
          <span className="text">WHAT WE OFFER</span>
          <div className="line"></div>
        </div>
        <h3 className="text-b">Featured Properties</h3>
      </div>
      <div className="properties">
        {
          where == "home" ? properties.slice( 0, 6 ).map( ( card ) => ( <div className="card" key={ card.id }>
            <div>
              <img src={ card.img } alt="Home Image" />
              <div className={ `badge ${card.badge}` }>{ card.badge }</div>
              <div className="price-tag">{ card.price } <span>{ card.unit }</span></div>
              <div className="link-container">
                <FaLink className="link-icon" />
              </div>
            </div>
            <div className="card-content">
              <div className="details">
                <span>{ card.dimensions }</span>
              </div>
              <div className="card-title">{ card.name }</div>
              <div className="location">{ card.location }</div>
              <hr />
              <div className="profile">
                <img src={ card.agent_img } alt="User Avatar" />
                <div className="profile-info">
                  { card.agent } <br />
                  <span>{ card.post_time }</span>
                </div>
              </div>
            </div>
          </div> ) ) :
            properties.map( ( card ) => (
              <div className="card" key={ card.id }>
                <div>
                  <img src={ card.img } alt="Home Image" />
                  <div className={ `badge ${card.badge}` }>{ card.badge }</div>
                  <div className="price-tag">{ card.price } <span>{ card.unit }</span></div>
                  <div className="link-container">
                    <FaLink className="link-icon" />
                  </div>
                </div>
                <div className="card-content">
                  <div className="details">
                    <span>{ card.dimensions }</span>
                  </div>
                  <div className="card-title">{ card.name }</div>
                  <div className="location">{ card.location }</div>
                  <hr />
                  <div className="profile">
                    <img src={ card.agent_img } alt="User Avatar" />
                    <div className="profile-info">
                      { card.agent } <br />
                      <span>{ card.post_time }</span>
                    </div>
                  </div>
                </div>
              </div>
            ) )
        }
      </div>
    </div>
  );
};

export default FeaturedProperties;