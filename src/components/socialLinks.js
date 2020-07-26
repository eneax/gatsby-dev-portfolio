import React from 'react';
import PropTypes from 'prop-types';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

const icons = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon" />,
    url: 'https://www.facebook.com',
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon" />,
    url: 'https://www.linkedin.com',
  },
  {
    id: 3,
    icon: <FaDribbbleSquare className="social-icon" />,
    url: 'https://www.dribbble.com',
  },
  {
    id: 4,
    icon: <FaBehanceSquare className="social-icon" />,
    url: 'https://www.behance.com',
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon" />,
    url: 'https://www.twitter.com',
  },
];

const SocialLinks = ({ styleClass }) => (
  <ul className={`social-links ${styleClass || ''}`}>
    {icons.map(({ id, url, icon }) => (
      <li key={id}>
        <a href={url} className="social-link" target="_blank" rel="noreferrer">
          {icon}
        </a>
      </li>
    ))}
  </ul>
);

SocialLinks.propTypes = {
  styleClass: PropTypes.string,
};

export default SocialLinks;
