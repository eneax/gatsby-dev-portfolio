import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
const getBlogsData = graphql`
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

const BlogPage = () => {
  const response = useStaticQuery(getBlogsData);
  const {
    allStrapiBlogs: { nodes: blogs },
  } = response;

  return (
    <Layout>
      <SEO title="Blog" />

      <BlogPageSection className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </BlogPageSection>
    </Layout>
  );
};

export default BlogPage;
