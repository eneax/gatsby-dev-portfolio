import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

// styles
const ErrorPageSection = styled.main`
  display: grid;
  place-items: center;
  background: var(--clr-primary-6);
  text-align: center;

  h1 {
    text-transform: uppercase;
    color: var(--clr-primary-1);
    margin-bottom: 2rem;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <ErrorPageSection className="error-page">
      <div className="error-container">
        <h1>NOT FOUND</h1>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </ErrorPageSection>
  </Layout>
);

export default NotFoundPage;
