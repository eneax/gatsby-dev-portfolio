import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Services from '../components/services';

const HomePage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    <Services />
  </Layout>
);

export default HomePage;
