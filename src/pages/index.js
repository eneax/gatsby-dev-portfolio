import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Services from '../components/services';
import Jobs from '../components/jobs';
import Projects from '../components/projects';

export const getProjectsData = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        github
        url
        stack {
          id
          item
        }
      }
    }
  }
`;

const HomePage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data;

  return (
    <Layout>
      <SEO title="Home" />

      <Hero />
      <Services />
      <Jobs />
      <Projects title="featured projects" projects={projects} showLink />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    allStrapiProjects: PropTypes.object.isRequired,
  }).isRequired,
};

export default HomePage;
