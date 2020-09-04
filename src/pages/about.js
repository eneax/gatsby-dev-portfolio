import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/title';

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
      <section className="about-page">
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
      </section>
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    about: PropTypes.object.isRequired,
  }).isRequired,
};

export default About;
