import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/title';

// styles
const AboutSection = styled.section`
  padding: 7rem 0;

  .about-img {
    margin-bottom: 2rem;
    height: 25rem;
  }

  .about-text {
    .section-title {
      margin-bottom: 2rem;
      text-align: left;
    }

    .underline {
      margin-left: 0;
      margin-right: 0;
    }

    p {
      line-height: 2;
    }
  }

  .stack-container {
    width: 30rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 0.5rem;

    span {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      letter-spacing: 1px;
      color: var(--clr-grey-4);
    }
  }

  .stack-icon {
    color: var(--clr-primary-5);
    margin-right: 0.25rem;
    font-size: 1rem;
  }

  .about-stack {
    span {
      display: inline-block;
      background: var(--clr-grey-9);
      color: var(--clr-grey-5);
      margin-top: 0.5rem;
      margin-right: 0.5rem;
      padding: 0.25rem 0.5rem;
      border-radius: var(--radius);
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.85rem;
    }
  }

  @media screen and (min-width: 992px) {
    .about-center {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
      column-gap: 4rem;
    }
    .about-img {
      grid-column: 1 / span 5;
      margin-bottom: 0;
    }
    .about-text {
      grid-column: 6 / -1;
    }
  }
`;

// query
export const getAboutData = graphql`
  {
    about: allStrapiAbout {
      nodes {
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          item
        }
      }
    }
  }
`;

const About = ({ data }) => {
  const {
    about: { nodes },
  } = data;
  const { info, stack, title, image } = nodes[0];

  return (
    <Layout>
      <SEO title="About Me" description="about webdev" />

      <AboutSection className="about-page">
        <div className="section-center about-center">
          <Img fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(({ id, item }) => (
                <span key={id}>{item}</span>
              ))}
            </div>
          </article>
        </div>
      </AboutSection>
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    about: PropTypes.object.isRequired,
  }).isRequired,
};

export default About;
