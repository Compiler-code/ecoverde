import {
  FaHome,
  FaWater,
  FaSolarPanel,
  FaRecycle,
  FaLeaf,
  FaTree,
  FaBatteryFull,
  FaRegLightbulb
} from 'react-icons/fa';
import "../CSS/globals.css";
import React from 'react';

const SpecialServices = () => {
  return (
    <div className="special-services">
      <div className="title">
        <div className="top">
          <div className="line"></div>
          <p>SERVICES</p>
          <div className="line"></div>
        </div>
        <h4>Special Services</h4>
      </div>

      <div className="services">
        <div className="service">
          <FaLeaf className="icon" />
          <h3>Eco-Friendly Solutions</h3>
          <p>
            We offer sustainable and environmentally friendly property solutions that minimize environmental impact.
          </p>
        </div>
        <div className="service">
          <FaRecycle className="icon" />
          <h3>Waste Management</h3>
          <p>
            We implement proper recycling and waste management systems promoting environmental sanitation.
          </p>
        </div>
        <div className="service">
          <FaSolarPanel className="icon" />
          <h3>Solar Energy Integration</h3>
          <p>
            Redefine your properties with cutting-edge renewable solar energy solutions reducing energy costs.
          </p>
        </div>
        <div className="service">
          <FaWater className="icon" />
          <h3>Water Conservation</h3>
          <p>
            We offer efficient water conservation techniques that help reduce utility costs.
          </p>
        </div>
        <div className="service">
          <FaHome className="icon" />
          <h3>Smart Home Automation</h3>
          <p>
            Transform your living space with cutting-edge smart home technology that offers unmatched convenience.
          </p>
        </div>
        <div className="service">
          <FaTree className="icon" />
          <h3>Green Landscaping</h3>
          <p>
            Experience eco-friendly landscaping designs that promote biodiversity and sustainability.
          </p>
        </div>
        <div className="service">
          <FaRegLightbulb className="icon" />
          <h3>Energy Efficiency Consulting</h3>
          <p>
            Receive expert advice on reducing energy consumption and optimizing efficiency.
          </p>
        </div>
        <div className="service">
          <FaBatteryFull className="icon" />
          <h3>Battery Storage Solutions</h3>
          <p>
            We provide advanced battery storage options designed to maximize renewable energy usage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialServices;