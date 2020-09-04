import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  query getSingleBlogPost($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      title
      desc
      content
    }
  }
`;

const BlogTemplate = ({ data }) => {
  const { title, desc, content } = data.blog;

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            View all posts
          </Link>
        </div>
      </section>
    </Layout>
  );
};

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    blog: PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogTemplate;
