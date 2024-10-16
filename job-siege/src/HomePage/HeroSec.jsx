import React from 'react'
import image from '../Images/heroSection.jpeg'
import "./HeroSec.css"

function HeroSec() {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img
          src={image}
          alt="Hero"
        />
      </div>
      <div className="hero-text">
        <p>
          Effectively tracking and managing job applications is equally critical as the process of applying itself. 
        </p>
      </div>
    </div>
  )
}

export default HeroSec
