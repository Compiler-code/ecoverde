import React from 'react';

const AgentCard = ( {
  name = "Agent Name",
  properties = 0,
  imgSource = ""
} ) => {
  return (
    <div className="agent-card">
      <img src={ imgSource } alt="name" />
      <div className="text">
        <h4 className="agent-name">{ name }</h4>
        <div className="status">
          <h5>Listing</h5>
          <h5>{ properties > 1 ? `${properties} properties` : `${properties} property` || properties == 0 ? `${properties} properties` : `${properties} property` }</h5>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;