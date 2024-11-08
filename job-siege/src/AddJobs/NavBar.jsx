import React from 'react';

const NavBar = ({ onNavClick, onAddRoundClick, rounds }) => {

  return (
    <div className="nav-bar">
      <h3>Navigation</h3>
      <ul>
        <li onClick={() => onNavClick('Job')}>Job</li>
        <div>
          {rounds.map((round, index) => (
            <li onClick={() => onNavClick(round)}>
              {round}
            </li>
          ))}
        </div>
        <li onClick={onAddRoundClick}>Add Round</li>
      </ul>
    </div>
  );
};

export default NavBar;
