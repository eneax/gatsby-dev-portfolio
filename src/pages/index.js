import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Services from '../components/services';
import Jobs from '../components/jobs';
import Projects from '../components/projects';
import Blogs from '../components/blogs';

export const getFeaturedProjectsData = graphql`
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
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        id
        title
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category
        content
        date(formatString: "MMMM Do, YYYY")
        desc
      }
    }
  }
`;

const HomePage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data;

  return (
    <Layout>
      <SEO title="Home" />

      <Hero />
      <Services />
      <Jobs />
      <Projects title="featured projects" projects={projects} showLink />
      <Blogs title="blogs" blogs={blogs} showLink />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    allStrapiProjects: PropTypes.object.isRequired,
    allStrapiBlogs: PropTypes.object.isRequired,
  }).isRequired,
};

export default HomePage;
