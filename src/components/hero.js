import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import SocialLinks from './socialLinks';

// styles
const HeaderHero = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: var(--clr-primary-6);
  position: relative;

  .hero-center {
    height: 100%;
    display: grid;
    align-items: center;
  }

  .hero-info {
    background: var(--clr-primary-6);

    h4 {
      color: var(--clr-dark);
    }
  }

  .underline {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  .btn {
    margin-top: 1.25rem;
  }

  .hero-img {
    display: none;
  }

  @media screen and (min-width: 992px) {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      background: var(--clr-white);
    }

    .hero-center {
      grid-template-columns: repeat(12, 1fr);
    }

    .hero-info {
      grid-row: 1/1;
      grid-column: 1 / span 8;

      h4 {
        font-size: 0.85rem;
      }
    }

    .hero-img {
      display: block;
      grid-row: 1/1;
      grid-column: 6/-1;
    }
  }

  @media screen and (min-width: 1170px) {
    .hero-info {
      grid-column: 1 / span 8;

      h4 {
        font-size: 1rem;
        line-height: 1;
      }
    }
  }
`;

// query
const getHeroImg = graphql`
  {
    heroImg: file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const response = useStaticQuery(getHeroImg);
  const heroImg = response.heroImg.childImageSharp.fluid;

  return (
    <HeaderHero>
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline" />
            <h1>Hi, I'm John</h1>
            <h4>Web Developer</h4>
            <Link to="contact" className="btn">
              Contact Me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Img fluid={heroImg} className="hero-img" />
      </div>
    </HeaderHero>
  );
};

export default Hero;
