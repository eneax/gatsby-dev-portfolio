import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

import Links from './pageLinks';
import SocialLinks from './socialLinks';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''} `}>
    <button className="close-btn" type="button" onClick={toggleSidebar}>
      <FaTimes />
    </button>
    <div className="side-container">
      <Links styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
      <SocialLinks styleClass={`${isOpen ? 'sidebar-icons' : ''}`} />
    </div>
  </aside>
);

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
