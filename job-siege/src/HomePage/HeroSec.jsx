import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../Images/heroSection.jpeg";
import "./HeroSec.css";

function HeroSec() {
  const navigate = useNavigate();

  const handleTrackIt = () => {
    navigate("/track-jobs");
  };
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={image} alt="Hero" />
      </div>
      <div className="hero-text">
        <p>
          Effectively tracking and managing job applications is equally critical
          as the process of applying itself.
        </p>
        <button onClick={handleTrackIt} className="track-it">
          Track it
        </button>
      </div>
    </div>
  );
}

export default HeroSec;
