import React from 'react';

import SocialLinks from './socialLinks';

const Footer = () => (
  <footer className="footer">
    <div>
      <SocialLinks styleClass="footer-links" />
      <h4>
        copyright &copy; {new Date().getFullYear()}
        <span> john </span> all rights reserved
      </h4>
    </div>
  </footer>
);

export default Footer;
