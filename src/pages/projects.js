import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Projects from '../components/projects';

export const getProjectsData = graphql`
  {
    allStrapiProjects {
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

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data;

  return (
    <Layout>
      <SEO title="Projects" />

      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  );
};

ProjectsPage.propTypes = {
  data: PropTypes.shape({
    allStrapiProjects: PropTypes.object.isRequired,
  }).isRequired,
};

export default ProjectsPage;
