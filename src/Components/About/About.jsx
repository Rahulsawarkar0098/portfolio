import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
import R_logo from "../../assets/React.svg"
import js_logo from "../../assets/javascript.svg"

const About = () => {
  return (
    <section id="about" className="scroll-effect">
      <div className="about">
        <div className="about-title">
          <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
          <div className="about-left">
            <img src={profile_img} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                I’m a front-end developer focused on building clean, responsive,
                and user-centric web interfaces.
              </p>
              <p>
                I enjoy turning complex ideas into simple, elegant experiences
                using modern web technologies.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <p>Javascript <img src={js_logo} alt="" className="logos" /> </p>
                <p>React JS <img src={R_logo} alt="" className="logos" /> </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-achivements">
          <div className="about-achivement">
            <h1>5+</h1>
            <p>project completed</p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>5+</h1>
            <p>Months of Experience</p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>15+</h1>
            <p>Happy Customer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
