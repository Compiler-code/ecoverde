import "../CSS/globals.css";
import React from 'react';

import CountUp from "react-countup";


const Statistics = () => {
  return (
    <div className="stats">
      <div className="stat">
        <CountUp start={ 0 } end={ 1000 } duration={ 5 } className="value" />
        <h5>Area <br /> Population</h5>
      </div>
      <div className="line" />
      <div className="stat">
        <CountUp start={ 0 } end={ 2500 } duration={ 5 } className="value" />
        <h5>Total <br /> Properties</h5>
      </div>
      <div className="line" />
      <div className="stat">
        <CountUp start={ 0 } end={ 500 } duration={ 5 } className="value" />
        <h5>Average <br /> House</h5>
      </div>
      <div className="line" />
      <div className="stat">
        <CountUp start={ 0 } end={ 67 } duration={ 5  } className="value" />
        <h5>Total <br /> Branches</h5>
      </div>
    </div>
  );
};

export default Statistics;
