import React from "react";
import "./Home.css";
import applogo from "../Images/applogo.png";
import line from "../Images/line.png";
import profile from "../Images/profile.png";

function Home() {
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

      <div className="nav-right">
        <div className="nav-right desktop">
          <img src={line} alt="" className="lines" />
          <a href="/home" className="nav-link">
            Home
          </a>
          <img src={line} alt="" className="lines" />
          <a href="/about" className="nav-link">
            About Us
          </a>
          <img src={line} alt="" className="lines" />
          <a href="/contact" className="nav-link">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Home;
