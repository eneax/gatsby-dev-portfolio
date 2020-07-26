import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

const HomePage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
  </Layout>
);

export default HomePage;
