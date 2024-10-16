import React, {useState} from "react";
import "./Header.css";
import applogo from "../Images/applogo.png";
import line from "../Images/line.png";
import profile from "../Images/profile.png";


function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={profile} alt="" className="profile-pic" />
        <span className="username">Username</span>
        <img src={line} alt="" className="lines" />
      </div>

      <div className="nav-middle">
        <img src={applogo} alt="" className="app-logo" />
        <p className="app">
          <span style={{ color: "#975842" }}>J</span>ob{" "}
          <span style={{ color: "#975842" }}>S</span>iege
        </p>
      </div>

      <div className="nav-right desktop">
        <div className="nav-right">
          <img src={line} alt="" className="lines" />
          <a href="/home" className="nav-link">
            Home
          </a>
          <img src={line} alt="" className="lines" />
          <a href="/home" className="nav-link">
            About Us
          </a>
          <img src={line} alt="" className="lines" />
          <a href="/home" className="nav-link">
            Contact Us
          </a>
        </div>
      </div>
      <div className="mobile">
        <img src={line} alt="" className="lines sp-line" />
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <a href="/home" className="menu-item">Home</a>
          <a href="/home" className="menu-item">About Us</a>
          <a href="/home" className="menu-item">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
