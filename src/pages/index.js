import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Services from '../components/services';
import Jobs from '../components/jobs';
import Projects from '../components/projects';
import Blogs from '../components/blogs';

const getFeaturedProjectsData = graphql`
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

const HomePage = () => {
  const response = useStaticQuery(getFeaturedProjectsData);
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = response;

  return (
    <Layout>
      <SEO title="Home" />

      <Hero />
      <Services />
      <Jobs />
      <Projects title="featured projects" projects={projects} showLink />
      <Blogs title="recent posts" blogs={blogs} showLink />
    </Layout>
  );
};

export default HomePage;
