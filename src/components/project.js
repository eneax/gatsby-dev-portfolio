import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';

// styles
const ProjectArticle = styled.article`
  display: grid;
  margin-bottom: 4rem;

  &:hover {
    .project-img::after {
      opacity: 0;
    }
  }

  .project-img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 19rem;
    z-index: 1;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
      opacity: 0.85;
      transition: var(--transition);
    }
  }

  .project-info {
    background: var(--clr-white);
    padding: 1rem 2rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);

    .project-number {
      display: inline-block;
      font-size: 1.25rem;
      color: var(--clr-primary-5);
      margin-bottom: 0.75rem;
    }

    h3 {
      font-weight: 500;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }

    .project-desc {
      word-spacing: 15px;
      color: var(--clr-grey-3);
    }

    .project-stack {
      margin-bottom: 1rem;

      span {
        display: inline-block;
        background: var(--clr-grey-9);
        color: var(--clr-grey-5);
        margin-right: 0.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.85rem;
      }
    }

    .project-icon {
      color: var(--clr-primary-5);
      font-size: 1.25rem;
      margin-right: 0.5rem;
      transition: var(--transition);

      &:hover {
        color: var(--clr-primary-1);
      }
    }
  }

  @media screen and (min-width: 576px) {
    .project-img {
      height: 19rem;
    }
  }
  @media screen and (min-width: 768px) {
    .project-img {
      height: 22rem;
    }
  }
  @media screen and (min-width: 992px) {
    & {
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
    }
    &:nth-of-type(even) .project-img {
      grid-column: 5 / -1;
      grid-row: 1 / 1;
    }
    &:nth-of-type(even) .project-info {
      grid-column: 2 / span 7;
      grid-row: 1 / 1;
      text-align: left;
    }

    .project-img {
      grid-column: 1 / span 8;
      grid-row: 1 / 1;
      height: 30rem;
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);
    }

    .project-info {
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);
      z-index: 1;
      grid-column: 5 /12;
      grid-row: 1 / 1;
    }
  }
`;

const Project = ({ index, title, description, image, stack, github, url }) => (
  <ProjectArticle>
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
  </ProjectArticle>
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
