import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Services from '../components/services';
import Jobs from '../components/jobs';

const HomePage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    <Services />
    <Jobs />
  </Layout>
);

export default HomePage;
