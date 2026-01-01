import React from 'react'
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg"
import call_icon from "../../assets/call_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "c976534d-fe15-405e-baac-e03314f8cdfd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <section id='contact' className='scroll-effect' >
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1>Get in touch</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I am currently availabe to take on new projects</p>
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>rahulsawarkar93@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 9284491592</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Nagpur, Maharashtra</p>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your name</label>
            <input type="text" placeholder="Enter Your Name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="email" name="email" placeholder="Enter Your email" />
            <label htmlFor="">Enter Your Message Here</label>
            <textarea
              name="Message"
              rows="8"
              placeholder="Enter Your Message" 
            ></textarea>
            <button type="submit" className="contact-submit">
              submit now
            </button>
            <span>{result}</span>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact
