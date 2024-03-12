import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar, handleLogout }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className="close-button">
        X
      </button>
      <div className="sidebar-content">
        <ul className="sidebar-menu">
          <li>
            <NavLink to="/mylink" onClick={toggleSidebar}>My Link</NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>Déconnexion</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
