import React from "react";
import "./Hero.css";
import profile_img from "../../assets/my-img1.jpg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I am Rahul </span>,Frontend Developer based in India
      </h1>
      <p>
        i am a frontend developer from Nagpur,Maharashtra with 5+ months of experience
      </p>
      <div className="hero-action">
        <div className="hero-connect">connect with me</div>
        <div className="hero-resume">my resume</div>
      </div>
    </div>
  );
};

export default Hero;
