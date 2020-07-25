import React from 'react';
import { FaAlignRight } from 'react-icons/fa';

import logo from '../assets/logo.svg';
import PageLinks from './pageLinks';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="Logo" />
        <button type="button" className="toggle-btn">
          <FaAlignRight />
        </button>
      </div>
      <PageLinks styleClass="nav-links" />
    </div>
  </nav>
);

export default Navbar;
