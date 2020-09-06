import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Title from './title';
import Project from './project';

// styles
const ProjectsSection = styled.section`
  .projects {
    background: var(--clr-secondary-6);
  }
`;

const Projects = ({ title, projects, showLink }) => (
  <ProjectsSection className="section">
    <Title title={title} />

    <div className="section-center projects-center">
      {projects.map((project, index) => (
        <Project key={project.id} index={index} {...project} />
      ))}
    </div>

    {showLink && (
      <Link to="/projects" className="btn center-btn">
        Projects
      </Link>
    )}
  </ProjectsSection>
);

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired,
  showLink: PropTypes.bool,
};

export default Projects;
