import React from 'react';

const NavBar = ({ onNavClick }) => {
  return (
    <div className="nav-bar">
      <h3>Navigation</h3>
      <ul>
        <li onClick={() => onNavClick('Job')}>Job</li>
        <li onClick={() => onNavClick('Round1')}>Round 1</li>
        <li onClick={() => onNavClick('Round2')}>Round 2</li>
      </ul>
    </div>
  );
};

export default NavBar;
