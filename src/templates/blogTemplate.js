import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

// styles
const BlogTemplateSection = styled.section`
  padding: 5rem 0;

  h1,
  h2 {
    text-align: center;
  }

  ul {
    margin-top: 2rem;
    display: inline-block;

    li {
      background: var(--clr-secondary-5);
      color: var(--clr-secondary-4);
      padding: 0.5rem 1rem;
      margin: 1rem 0;
      text-transform: uppercase;
    }
  }

  blockquote {
    background: var(--clr-primary-5);
    border-radius: var(--radius);
    padding: 1rem;
    line-height: 2;
    color: var(--clr-primary-3);
    margin: 2rem 0;
  }
  pre {
    background: #222;
    color: yellow;
    overflow-x: scroll;
    padding: 1rem 1.5rem;
    border-radius: var(--radius);
  }
  img {
    width: 15rem;
    height: 15rem;
    margin: 3rem 0;
  }
`;

// query
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

      <BlogTemplateSection>
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            View all posts
          </Link>
        </div>
      </BlogTemplateSection>
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
