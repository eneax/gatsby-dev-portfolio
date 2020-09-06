import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import styled from 'styled-components';

// styled
const BlogSection = styled(Link)`
  display: block;
  margin-bottom: 2rem;
  background: var(--clr-secondary-6);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);

  &:hover {
    box-shadow: var(--dark-shadow);
    transform: scale(1.02);
  }

  article {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .blog-img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 15rem;
  }

  .blog-card {
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 1.5rem 1rem;

    h4 {
      color: var(--clr-secondary-1);
    }
  }

  .blog-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin-bottom: 0;
      font-weight: bold;
      color: var(--clr-secondary-4);

      &:first-of-type {
        display: inline-block;
        background: var(--clr-secondary-5);
        color: var(--clr-secondary-4);
        margin-right: 0.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.85rem;
      }
    }
  }

  @media screen and (min-width: 576px) {
    .blog-img {
      height: 17.5rem;
    }
  }
  @media screen and (min-width: 850px) {
    .blog-img {
      height: 13.75rem;
    }
  }
`;

const Blog = ({ id, title, image, date, category, slug, desc }) => (
  <BlogSection to={`/blogs/${slug}`} className="blog" key={id}>
    <article>
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="blog-img" />
      )}
      <div className="blog-card">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="blog-footer">
          <p>{category}</p>
          <p>{date}</p>
        </div>
      </div>
    </article>
  </BlogSection>
);

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};

export default Blog;
