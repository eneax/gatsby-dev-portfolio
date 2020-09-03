import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Title from './title';
import Project from './project';

const Projects = ({ title, projects, showLink }) => (
  <section className="section projects">
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
  </section>
);

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired,
  showLink: PropTypes.bool.isRequired,
};

export default Projects;
