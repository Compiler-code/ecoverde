import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { db } from '../../assets/Data/script';

const WorkFlow = ( { where } ) => {
  const [ flows, setFlows ] = useState( [] );

  useEffect( () => {
    setFlows(db["work-flow"])
  }, [] );

  if ( flows.length == 0 || flows == [] ) {
    setFlows(
      [
        {
          id: "01",
          name: "Evaluate Property",
          description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
          id: "02",
          name: "Meet Your Agent",
          description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
          id: "03",
          name: "Close the Deal",
          description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
          id: "04",
          name: "Have Your Property",
          description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        }
      ]
    );
  }

  return (
    <div className={ `work-flow ${where}` }>
      <div className="title">
        <div className="top">
          <div className="line" />
          <p>WORK FLOW</p>
          <div className="line" />
        </div>
        <h4 className="bottom">How it woks</h4>
      </div>
      <div className="flows">
        { flows.map( ( flow ) => (
          <div className="card" key={ flow.id }>
            <div className="image-container">
              <img src="../../assets/Images/blob.svg" alt="Blob Icon" />
              <h1>{ flow.id }</h1>
            </div>
            <h2>{ flow.name }</h2>
            <p>{ flow.description }</p>
          </div>
        ) ) }
      </div>
    </div>
  );
};

export default WorkFlow;