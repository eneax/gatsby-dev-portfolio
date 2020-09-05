import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const links = [
  {
    id: 1,
    text: 'about',
    url: '/about/',
  },
  {
    id: 2,
    text: 'projects',
    url: '/projects/',
  },
  {
    id: 3,
    text: 'blog',
    url: '/blog/',
  },
  {
    id: 4,
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
