import React, { useEffect, useState } from 'react';
import AgentCard from "./AgentCard";
import { toast } from "react-toastify";
import { db } from '../../assets/Data/script';

const OurAgents = ({where}) => {
  const [ agents, setAgents ] = useState( [] );

  useEffect( () => {
    setAgents(db["agents-data"])
  }, [] );

  return (
    <div className={`our-agents ${where}`}>
      <div className="header">
        <div className="top">
          <div className="line"></div>
          <p className="text">AGENTS</p>
          <div className="line"></div>
        </div>
        <h3 className="bottom">Our Agents</h3>
      </div>
      <div className="agents">
        { agents.map( ( agent ) => (
          <AgentCard
            key={ agent.id }
            imgSource={ agent.img_source }
            name={ agent.name }
            properties={ agent.properties }
          />
        ) ) }
      </div>
    </div>
  );
};

export default OurAgents;