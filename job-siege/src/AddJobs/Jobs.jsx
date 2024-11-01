import React from 'react';
import NavBar from './NavBar';
import ContentArea from './ContentArea';
import { useState } from 'react';
import "./Jobs.css";

function Jobs() {
    const [selectedSection, setSelectedSection] = useState('Job');

    const handleNavClick = (section) => {
      setSelectedSection(section);
    };
  
    return (
      <div className="app-container">
        <NavBar onNavClick={handleNavClick} />
        <ContentArea section={selectedSection} />
      </div>
    );
}

export default Jobs
