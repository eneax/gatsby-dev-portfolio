import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
