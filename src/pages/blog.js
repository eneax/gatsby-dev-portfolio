import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Blogs from '../components/blogs';

// styles
const BlogPageSection = styled.section`
  .blog {
    background: var(--clr-white);
  }
`;

// query
export const getBlogsData = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const BlogPage = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data;

  return (
    <Layout>
      <SEO title="Blog" />

      <BlogPageSection className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </BlogPageSection>
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.shape({
    allStrapiBlogs: PropTypes.object.isRequired,
  }).isRequired,
};

export default BlogPage;
