import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Title from './title';
import Blog from './blog';

// styled
const BlogsSection = styled.section`
  @media screen and (min-width: 576px) {
    .blogs-center {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
      column-gap: 2rem;
    }
  }
`;

const Blogs = ({ title, blogs, showLink }) => (
  <BlogsSection className="section">
    <Title title={title} />
    <div className="section-center blogs-center">
      {blogs.map(blog => (
        <Blog key={blog.id} {...blog} />
      ))}
    </div>
    {showLink && (
      <Link to="/blog" className="btn center-btn">
        blog
      </Link>
    )}
  </BlogsSection>
);

Blogs.propTypes = {
  title: PropTypes.string.isRequired,
  blogs: PropTypes.array.isRequired,
  showLink: PropTypes.bool,
};

export default Blogs;
