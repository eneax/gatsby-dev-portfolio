import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import SocialLinks from './socialLinks';

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
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline" />
            <h1>Hi, I'm John</h1>
            <h4>Web Developer</h4>
            <Link to="contact" className=" btn">
              Contact Me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Img fluid={heroImg} className="hero-img" />
      </div>
    </header>
  );
};

export default Hero;
