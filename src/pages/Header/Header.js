// Header.js
import React, { useState } from 'react';
import './Header.css';
import logo from '../../image/AIMobilierblanc.png';
import Sidebar from '../Sidebar/Sidebar';
import sidebarIcon from '../../image/3401904-200.png';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h1>AI MOBILIER</h1>
        <img
          src={sidebarIcon}
          alt="Sidebar Icon"
          className="sidebar-toggle-button"
          onClick={toggleSidebar}
        />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </header>
    </>
  );
};

export default Header;
