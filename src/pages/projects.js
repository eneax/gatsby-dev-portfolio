import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Projects from '../components/projects';

const getProjectsData = graphql`
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

const ProjectsPage = () => {
  const response = useStaticQuery(getProjectsData);
  const {
    allStrapiProjects: { nodes: projects },
  } = response;

  return (
    <Layout>
      <SEO title="Projects" />

      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  );
};

export default ProjectsPage;
