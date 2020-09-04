import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Title from './title';
import Blog from './blog';

const Blogs = ({ title, blogs, showLink }) => (
  <section className="section">
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
  </section>
);

Blogs.propTypes = {
  title: PropTypes.string.isRequired,
  blogs: PropTypes.array.isRequired,
  showLink: PropTypes.string.isRequired,
};

export default Blogs;
