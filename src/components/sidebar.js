import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import styled, { css, keyframes } from 'styled-components';

import Links from './pageLinks';
import SocialLinks from './socialLinks';

// styles
const showSidebar = css`
  opacity: 1;
  transform: translateX(0);
`;

const slideRight = keyframes`
  from {
    transform: translateX(-200px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const SidebarSection = styled.aside`
  background: var(--clr-secondary-6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 0;
  transition: var(--transition);
  transform: translateX(-100%);

  /* toggle sidebar */
  ${({ isOpen }) => isOpen && showSidebar}

  .sidebar-links {
    li {
      opacity: 0;
      animation: ${slideRight} 0.5s ease-in-out 0.3s forwards;

      &:nth-of-type(1) {
        animation-delay: 0.25s;
      }
      &:nth-of-type(2) {
        animation-delay: 0.5s;
      }
      &:nth-of-type(3) {
        animation-delay: 0.75s;
      }
      &:nth-of-type(4) {
        animation-delay: 1s;
      }
      &:nth-of-type(5) {
        animation-delay: 1.25s;
      }

      a {
        display: block;
        text-align: center;
        text-transform: capitalize;
        color: var(--clr-secondary-4);
        letter-spacing: var(--spacing);
        margin-bottom: 0.5rem;
        font-size: 2rem;
        transition: var(--transition);
        border-radius: var(--radius);

        &:hover {
          background: var(--clr-primary-5);
          color: var(--clr-primary-3);
        }
      }
    }
  }

  .sidebar-icons {
    li {
      opacity: 0;
      animation: ${slideUp} 0.5s ease-in-out 0.3s forwards;

      &:nth-of-type(1) {
        animation-delay: 0.25s;
      }
      &:nth-of-type(2) {
        animation-delay: 0.5s;
      }
      &:nth-of-type(3) {
        animation-delay: 0.75s;
      }
      &:nth-of-type(4) {
        animation-delay: 1s;
      }
      &:nth-of-type(5) {
        animation-delay: 1.25s;
      }
    }
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 4.75%;
  top: 2.75%;
  font-size: 2.5rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-danger-1);
  cursor: pointer;

  @media screen and (min-width: 992px) {
    transform: translateX(-100%);
  }
`;

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <SidebarSection isOpen={isOpen}>
    <CloseBtn onClick={toggleSidebar}>
      <FaTimes />
    </CloseBtn>
    <div className="side-container">
      <Links styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
      <SocialLinks styleClass={`${isOpen ? 'sidebar-icons' : ''}`} />
    </div>
  </SidebarSection>
);

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
