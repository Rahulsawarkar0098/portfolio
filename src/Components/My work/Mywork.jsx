import React from 'react'
import './Mywork.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import work_data from "../../assets/mywork_data.js";
import mywork_data from '../../assets/mywork_data.js';


const Mywork = () => {
  return (
    <section id="work" className="scroll-effect">
      <div id="portfolio" className="mywork">
        <div className="title">
          <h1>My latest work</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
          {mywork_data.map((work, index) => {
            return <img key={index} src={work.w_img} alt="" srcset="" />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Mywork
