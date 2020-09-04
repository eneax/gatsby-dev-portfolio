import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <main className="error-page">
      <div className="error-container">
        <h1>NOT FOUND</h1>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </main>
  </Layout>
);

export default NotFoundPage;
