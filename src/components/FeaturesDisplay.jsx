import React from "react";
import { FaUsers, FaBuilding, FaChartLine, FaUserTie, FaHandshake, FaRegHandshake, FaRegChartBar, FaRegUser } from "react-icons/fa";
import { FaBuildingColumns, FaBuildingUser, FaRegBuilding } from "react-icons/fa6";

const FeaturesPanel = ( { ishome=true } ) => {
  return (
    <div className={ ishome ? "features-panel before" : "features-panel" }>
      <div className="feature-card">
        <FaRegHandshake className="feature-icon" />
        <h3 className="feature-title">Trusted by Thousands</h3>
        <p className="feature-description">Our clients rely on our proven track record in real estate services.</p>
      </div>
      <div className="feature-card">
        <FaRegBuilding className="feature-icon" />
        <h3 className="feature-title">Wide Range of Properties</h3>
        <p className="feature-description">Find properties that suit your needs, from homes to commercial spaces.</p>
      </div>
      <div className="feature-card">
        <FaRegChartBar className="feature-icon" />
        <h3 className="feature-title">Evaluate Property</h3>
        <p className="feature-description">Accurate property evaluations to maximize your investment.</p>
      </div>
      <div className="feature-card">
        <FaRegUser className="feature-icon" />
        <h3 className="feature-title">Meet Your Agent</h3>
        <p className="feature-description">Connect with expert agents to guide your property journey.</p>
      </div>
    </div>
  );
};

export default FeaturesPanel;