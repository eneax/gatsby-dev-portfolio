import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';

import logo from '../assets/logo.svg';
import PageLinks from './pageLinks';

const Navbar = ({ toggleSidebar }) => (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight />
        </button>
      </div>
      <PageLinks styleClass="nav-links" />
    </div>
  </nav>
);

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
