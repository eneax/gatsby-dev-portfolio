import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about/',
  },
  {
    id: 3,
    text: 'projects',
    url: '/projects/',
  },
  {
    id: 4,
    text: 'blog',
    url: '/blog/',
  },
  {
    id: 5,
    text: 'contact',
    url: '/contact/',
  },
];

const PageLinks = ({ styleClass }) => (
  <ul className={`page-links ${styleClass || ''}`}>
    {links.map(link => (
      <li key={link.id}>
        <Link to={link.url}>{link.text}</Link>
      </li>
    ))}
  </ul>
);

PageLinks.propTypes = {
  styleClass: PropTypes.string.isRequired,
};

export default PageLinks;
