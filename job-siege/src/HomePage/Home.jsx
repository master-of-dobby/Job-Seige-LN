import React  from 'react'
import './Home.css';
import applogo from "../Images/applogo.png"
import line from "../Images/line.png"
import profile from "../Images/profile.png"

function Home() {


  return (
    <nav class="navbar">
      <div class="nav-left">
          <img src={profile} alt="" class="profile-pic"/>
          <span class="username">Username</span>
          <img src={line} alt="" className='lines'/>
      </div>
      
      <div class="nav-middle">
          <img src={applogo} alt="" class="app-logo"/>
          <p className='app'>
            <span style={{ color: "#975842" }}>J</span>ob{" "}
            <span style={{ color: "#975842" }}>S</span>iege
          </p>
      </div>
      
    
      <div class="nav-right">
          <div className='nav-right desktop'>
            <img src={line} alt="" className='lines'/>
            <a href="/homepage" class="nav-link">Home</a>
            <img src={line} alt="" className='lines'/>
            <a href="/homepage" class="nav-link">About Us</a>
            <img src={line} alt="" className='lines'/>
            <a href="/homepage" class="nav-link">Contact Us</a>
          </div>
      </div>
    </nav>
  )
}

export default Home
