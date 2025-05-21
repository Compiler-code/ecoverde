import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { db } from '../../assets/Data/script';

const Testimonials = () => {
  const [ testimonials, setTestimonials ] = useState( [] );


  useEffect( () => {
    setTestimonials(db["testimonials"])
  }, [] );

  return (
    <div className="testimonials">
      <div className="title">
        <div className="top">
          <div className="line"></div>
          <p>TESTIMONIALS</p>
          <div className="line"></div>
        </div>
        <h4>Happy Clients</h4>
      </div>

      <div className="flex">
        {
          testimonials.map( ( testimony ) => (
            <div className="testimonial" key={testimony.id}>
              <FaQuoteLeft className="icon" />
              <div className="outer">
                <p>{ testimony.main }</p>
                <div className="lower">
                  <img src={ testimony.img } alt="Image" />
                  <div className="txt">
                    <h5>{ testimony.name }</h5>
                    <h6>{ testimony.position }</h6>
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

export default Testimonials;