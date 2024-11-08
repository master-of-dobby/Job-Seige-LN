import React from 'react';
import NavBar from './NavBar';
import ContentArea from './ContentArea';
import { useState } from 'react';
import "./Jobs.css";

function Jobs() {
    const [selectedSection, setSelectedSection] = useState('Job');

    const [rounds, setRounds] = useState([]);

    const handleAddRound = () => {
      setRounds([...rounds, `Round ${rounds.length + 1}`]);
    };

    const handleNavClick = (section) => {
      setSelectedSection(section);
    };
  
    return (
      <div className="app-container">
        <NavBar onNavClick={handleNavClick} onAddRoundClick={handleAddRound} rounds={rounds}/>
        <ContentArea section={selectedSection} rounds={rounds} />
      </div>
    );
}

export default Jobs
