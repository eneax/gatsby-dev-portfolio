import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

// data
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

// styles
const LinksWrapper = styled.ul`
  margin-top: 2rem;
  width: 15rem;
  display: flex;
  justify-content: space-between;
`;

const SocialLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener',
})`
  font-size: 1.75rem;
  color: var(--clr-grey-1);
  transition: var(--transition);

  &:hover {
    color: var(--clr-primary-5);
  }
`;

const SocialLinks = ({ styleClass }) => (
  <LinksWrapper className={`${styleClass || ''}`}>
    {icons.map(({ id, url, icon }) => (
      <li key={id}>
        <SocialLink href={url} className="social-link">
          {icon}
        </SocialLink>
      </li>
    ))}
  </LinksWrapper>
);

SocialLinks.propTypes = {
  styleClass: PropTypes.string,
};

export default SocialLinks;
