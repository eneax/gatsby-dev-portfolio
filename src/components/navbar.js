import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaAlignRight } from 'react-icons/fa';

import logo from '../assets/logo.svg';
import PageLinks from './pageLinks';

// styles
const NavWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-white);

  .nav-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    display: none;
  }

  @media screen and (min-width: 992px) {
    background: transparent;
  }

  @media screen and (min-width: 768px) {
    .nav-links {
      display: flex;
      justify-content: flex-end;

      li {
        margin-right: 2rem;
      }

      a {
        text-transform: capitalize;
        color: var(--clr-secondary-1);
        font-weight: bold;
        letter-spacing: var(--spacing);
        transition: var(--transition);
        padding: 0.5rem 0;

        &:hover {
          color: var(--clr-primary-3);
          box-shadow: 0px 2px var(--clr-primary-3);
        }
      }
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }
`;

const ToggleBtn = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-3);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--clr-primary-2);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggleSidebar }) => (
  <NavWrapper>
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">
          <img src={logo} width={40} height={40} alt="Logo" />
        </Link>
        <ToggleBtn onClick={toggleSidebar}>
          <FaAlignRight />
        </ToggleBtn>
      </div>
      <PageLinks styleClass="nav-links" />
    </div>
  </NavWrapper>
);

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
