import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';

const Project = ({ index, title, description, image, stack, github, url }) => (
  <article className="project">
    {image && (
      <Img fluid={image.childImageSharp.fluid} className="project-img" />
    )}
    <div className="project-info">
      <span className="project-number">0{index + 1}.</span>
      <h3>{title || 'default title'}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-stack">
        {stack.map(({ id, item }) => (
          <span key={id}>{item}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={github}>
          <FaGithubSquare className="project-icon" />
        </a>
        <a href={url}>
          <FaShareSquare className="project-icon" />
        </a>
      </div>
    </div>
  </article>
);

Project.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Project;
