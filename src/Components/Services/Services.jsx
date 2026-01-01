import React from 'react'
import './Services.css'
import { Element, ScrollElement } from "react-scroll";
import Services_Data from '../../assets/services_data'
import theme_pattern from "../../assets/theme_pattern.svg";
import scrollElement from 'react-scroll/modules/mixins/scroll-element';
const Services = () => {
  return (
    <section id='service' className='scroll-effect' >
      <div id="services" className="services">
        <div className="services-title">
          <h1>My services</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
          {Services_Data.map((service, index) => {
            return (
              <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services
