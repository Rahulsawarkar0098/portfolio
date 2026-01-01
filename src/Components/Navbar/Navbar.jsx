import React, { useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import theme_pattern from "../../assets/theme_pattern.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  const menuRef = useRef();
  const openmenu = () => {
    menuRef.current.style.right = "0";
  };
  const closemenu = () => {
    menuRef.current.style.right = "-280px";
  };

  return (
    <div className="navbar">
      <span className="title">
        RahuL
        <img src={theme_pattern}  alt="" />
      </span>
      <img src={menu_open} onClick={openmenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt=""
          onClick={closemenu}
          className="nav-mob-close"
        />
        <li>
          <p
            onClick={() => {
              setmenu("home");
            }}
          >
            Home
          </p>

          {menu == "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            <p
              onClick={() => {
                setmenu("about me");
              }}
            >
              About Me
            </p>
          </Link>
          {menu == "about me" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link to="service" smooth={true} duration={500}>
            <p
              onClick={() => {
                setmenu("service");
              }}
            >
              Services
            </p>
          </Link>
          {menu == "service" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            <p
              onClick={() => {
                setmenu("portfolio");
              }}
            >
              Portfolio
            </p>
          </Link>
          {menu == "portfolio" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            <p
              onClick={() => {
                setmenu("contact");
              }}
            >
              Contact
            </p>
          </Link>
          {menu == "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">Contact with me</div>
    </div>
  );
};

export default Navbar;
