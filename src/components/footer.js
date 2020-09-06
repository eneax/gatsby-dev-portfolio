import React from 'react';
import styled from 'styled-components';

import SocialLinks from './socialLinks';

const FooterWrapper = styled.footer`
  height: 9rem;
  background: #222;
  text-align: center;
  display: grid;
  place-items: center;

  h4 {
    margin-top: 0.5rem;
    color: var(--clr-white);
    font-weight: normal;
    text-transform: uppercase;

    span {
      color: var(--clr-primary-3);
    }
  }

  .footer-links {
    margin: 0 auto 1rem auto;
  }

  .social-link {
    color: var(--clr-white);

    &:hover {
      color: var(--clr-primary-3);
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <div>
      <SocialLinks styleClass="footer-links" />
      <h4>
        copyright &copy; {new Date().getFullYear()}
        <span> john </span> all rights reserved
      </h4>
    </div>
  </FooterWrapper>
);

export default Footer;
